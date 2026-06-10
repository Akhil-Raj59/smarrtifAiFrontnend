import { useState, useEffect } from "react";
import { useAppSelector } from "@/store";
import { Loader2, Phone, AlertCircle, ExternalLink, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export function BookConsultationPage() {
  const { user } = useAppSelector((state) => state.auth);
  const [iframeLoading, setIframeLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const schedulerBaseUrl = import.meta.env.VITE_ZOOM_SCHEDULER_URL || "";

  // Helper to construct URL with prefilled parameters if available
  const getSchedulerUrl = () => {
    if (!schedulerBaseUrl) return "";

    try {
      const url = new URL(schedulerBaseUrl);
      url.searchParams.set("embed", "true");

      if (user) {
        if (user.fullName) {
          const nameParts = user.fullName.trim().split(/\s+/);
          const firstname = nameParts[0] || "";
          const lastname = nameParts.slice(1).join(" ") || "";
          
          if (firstname) url.searchParams.set("firstname", firstname);
          if (lastname) url.searchParams.set("lastname", lastname);
        }
        if (user.email) {
          url.searchParams.set("email", user.email);
        }
      }

      return url.toString();
    } catch (e) {
      // Fallback in case VITE_ZOOM_SCHEDULER_URL is not a valid absolute URL
      let formattedUrl = schedulerBaseUrl;
      const separator = formattedUrl.includes("?") ? "&" : "?";
      formattedUrl += `${separator}embed=true`;
      
      if (user) {
        if (user.fullName) {
          const nameParts = user.fullName.trim().split(/\s+/);
          const firstname = nameParts[0] || "";
          const lastname = nameParts.slice(1).join(" ") || "";
          if (firstname) formattedUrl += `&firstname=${encodeURIComponent(firstname)}`;
          if (lastname) formattedUrl += `&lastname=${encodeURIComponent(lastname)}`;
        }
        if (user.email) {
          formattedUrl += `&email=${encodeURIComponent(user.email)}`;
        }
      }
      return formattedUrl;
    }
  };

  const iframeUrl = getSchedulerUrl();

  useEffect(() => {
    if (!schedulerBaseUrl) {
      setHasError(true);
      setIframeLoading(false);
    }
  }, [schedulerBaseUrl]);

  return (
    <div className="min-h-screen bg-gray-50 pt-20 pb-12">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        
        {/* Back Link & Page Header */}
        <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <Link
              to="/"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-550 hover:text-[var(--brand-red)] transition-colors mb-2"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
            <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight flex items-center gap-3">
              <span className="p-2 rounded-xl bg-red-50 text-[var(--brand-red)]">
                <Phone className="h-6 w-6" />
              </span>
              Book Your Free Consultation
            </h1>
            <p className="mt-2 text-sm text-gray-600 max-w-2xl">
              Schedule a 1-on-1 session with our expert advisors using Zoom Scheduler. Select a convenient date and time below.
            </p>
          </div>
          
          {/* If there's an error or just as a helpful utility, provide a direct link */}
          {schedulerBaseUrl && (
            <a
              href={iframeUrl.replace("embed=true", "")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold text-gray-750 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-all shadow-sm flex-shrink-0 cursor-pointer self-start sm:self-center"
            >
              Open in New Tab
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          )}
        </div>

        {/* Main Scheduler Container */}
        <div className="relative bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden min-h-[600px] flex flex-col items-center justify-center">
          
          {/* Loading State */}
          {iframeLoading && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-white z-10 p-6">
              <Loader2 className="h-10 w-10 text-[var(--brand-red)] animate-spin mb-4" />
              <p className="text-gray-650 font-medium">Loading Zoom Scheduler...</p>
              <p className="text-xs text-gray-400 mt-2">This may take a moment to initialize.</p>
            </div>
          )}

          {/* Error / Fallback State */}
          {hasError ? (
            <div className="p-8 text-center max-w-md flex flex-col items-center">
              <div className="p-3 rounded-full bg-red-55 border border-red-200 text-red-600 mb-4 animate-bounce">
                <AlertCircle className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Could Not Load Scheduler</h3>
              <p className="text-sm text-gray-600 mb-6">
                We encountered an issue initializing the Zoom Scheduler page. You can still book your consultation directly through the Zoom link.
              </p>
              {schedulerBaseUrl ? (
                <a
                  href={iframeUrl.replace("embed=true", "")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-[var(--brand-red)] to-[var(--brand-orange)] text-white hover:shadow-lg transition-all font-semibold cursor-pointer"
                >
                  Book Directly on Zoom
                  <ExternalLink className="h-4 w-4" />
                </a>
              ) : (
                <p className="text-xs text-red-500 font-semibold bg-red-50 px-3 py-1.5 rounded-md">
                  Error: Scheduler URL is not configured. Please contact support.
                </p>
              )}
            </div>
          ) : (
            /* The embedded Iframe */
            <iframe
              src={iframeUrl}
              title="Zoom Scheduler Booking Page"
              className="w-full min-h-[650px] border-0"
              onLoad={() => setIframeLoading(false)}
              onError={() => {
                setHasError(true);
                setIframeLoading(false);
              }}
              allow="camera; microphone; geolocation"
            />
          )}
        </div>

      </div>
    </div>
  );
}
