import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useAppDispatch } from "@/store";
import { openComingSoonModal } from "@/store/slices/uiSlice";

export function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();
  const dispatch = useAppDispatch();

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky CTA after scrolling 300px on mobile
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Don't show on assessment page
  if (location.pathname === "/assessment") {
    return null;
  }

  return (
    <div
      className={`md:hidden fixed bottom-0 left-0 right-0 z-40 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="bg-white border-t border-gray-200 shadow-lg p-4">
        <button
          onClick={() => dispatch(openComingSoonModal("Take Assessment"))}
          className="flex items-center justify-center gap-2 w-full px-6 py-3 rounded-lg bg-gradient-to-r from-[var(--brand-red)] to-[var(--brand-orange)] text-white cursor-pointer"
        >
          Take Free Assessment
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
