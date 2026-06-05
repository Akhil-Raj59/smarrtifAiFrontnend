import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Mail, ArrowLeft, CheckCircle2, ShieldCheck, Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { useAppDispatch } from "@/store";
import { setUser } from "@/store/slices/authSlice";
import authService from "@/services/auth.service";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const verificationSchema = z.object({
  otp: z
    .string()
    .min(6, "OTP must be exactly 6 digits")
    .max(6, "OTP must be exactly 6 digits")
    .regex(/^\d+$/, "OTP must contain only numbers"),
});

type VerificationSchemaType = z.infer<typeof verificationSchema>;

export const EmailVerificationPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useAppDispatch();

  // Retrieve email from React Router state or URL query params
  const emailFromState = location.state?.email || "";
  const queryParams = new URLSearchParams(location.search);
  const emailFromQuery = queryParams.get("email") || "";
  const email = emailFromState || emailFromQuery;

  const [isLoading, setIsLoading] = useState(false);
  const [isResending, setIsResending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [resendCooldown, setResendCooldown] = useState(0);

  const form = useForm<VerificationSchemaType>({
    resolver: zodResolver(verificationSchema),
    defaultValues: {
      otp: "",
    },
  });

  // Handle countdown timer for Resend OTP button cooldown
  useEffect(() => {
    if (resendCooldown <= 0) return;
    const timer = setTimeout(() => {
      setResendCooldown((prev) => prev - 1);
    }, 1000);
    return () => clearTimeout(timer);
  }, [resendCooldown]);

  // Handle verification submission
  const onSubmit = async (data: VerificationSchemaType) => {
    if (!email) {
      toast.error("Email address is missing. Please register again.");
      return;
    }

    setIsLoading(true);
    try {
      const response = await authService.verifyEmail(email, data.otp);
      if (response && response.success) {
        setIsSuccess(true);
        toast.success(response.message || "Email verified successfully!");
        
        // Save the authenticated user in Redux store
        if (response.user) {
          dispatch(setUser(response.user));
        }

        // Save Bearer Token if present in response
        if (response.token) {
          localStorage.setItem("token", response.token);
        }

        // Clean up pending registration from localStorage
        localStorage.removeItem("pending_registration");

        // Redirect to dashboard after a brief delay for user transition
        setTimeout(() => {
          navigate("/dashboard");
        }, 2000);
      } else {
        toast.error(response?.message || "Verification failed. Please try again.");
      }
    } catch (err: any) {
      const errMsg = err.response?.data?.message || err.message || "Verification failed.";
      toast.error(errMsg);
    } finally {
      setIsLoading(false);
    }
  };

  // Handle resending verification OTP
  const handleResendOTP = async () => {
    if (!email) {
      toast.error("Email address is missing.");
      return;
    }

    setIsResending(true);
    try {
      const response = await authService.resendVerificationOTP(email);
      if (response && response.success) {
        toast.success(response.message || "A new verification OTP has been sent!");
        setResendCooldown(30); // 30-second cooldown
      } else {
        toast.error(response?.message || "Failed to resend OTP. Please try again.");
      }
    } catch (err: any) {
      const errMsg = err.response?.data?.message || err.message || "Failed to send OTP.";
      toast.error(errMsg);
    } finally {
      setIsResending(false);
    }
  };

  // If no email was found, render a message prompting to register
  if (!email) {
    return (
      <div className="min-h-[calc(100vh-4rem)] bg-gray-50/50 flex items-center justify-center p-4 py-12">
        <div className="bg-white p-8 sm:p-12 max-w-md w-full rounded-3xl shadow-xl border border-gray-100 text-center space-y-6">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 text-red-650">
            <Mail className="h-8 w-8" />
          </div>
          <div>
            <h2 className="text-2xl font-black text-gray-900 tracking-tight">No Email Provided</h2>
            <p className="mt-2 text-sm text-gray-500 leading-relaxed">
              We couldn't find a pending email verification request. Please sign up or log in first.
            </p>
          </div>
          <Link
            to="/signup"
            className="w-full py-3 px-4 rounded-xl text-white font-bold bg-gradient-to-r from-orange-400 to-rose-400 hover:shadow-lg transition-all text-sm flex items-center justify-center gap-2"
          >
            Create an Account
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-gray-50/50 flex items-center justify-center p-4 py-12 sm:px-6 lg:px-8">
      <div className="bg-white rounded-3xl shadow-xl border border-gray-100 flex flex-col md:flex-row max-w-4xl w-full overflow-hidden min-h-[550px] animate-fade-in">
        {/* Left Side: Blur Gradient Panel */}
        <div className="hidden md:flex md:w-1/2 bg-gradient-to-br from-orange-400 via-red-500 to-rose-600 p-12 flex-col justify-end relative overflow-hidden">
          <div className="absolute top-[-10%] right-[-10%] w-72 h-72 rounded-full bg-yellow-300/40 blur-3xl" />
          <div className="absolute bottom-[20%] left-[-10%] w-80 h-80 rounded-full bg-rose-500/30 blur-3xl" />
          <div className="absolute inset-0 bg-black/5" />

          <div className="relative z-10 space-y-4">
            <h2 className="text-3xl font-extrabold text-white leading-tight">
              Validate your email to secure your account and access dashboard
            </h2>
          </div>
        </div>

        {/* Right Side: Form / Success state */}
        <div className="w-full md:w-1/2 p-8 sm:p-12 flex flex-col justify-center bg-white">
          <div className="max-w-md w-full mx-auto space-y-6">
            {!isSuccess ? (
              <>
                {/* Title Icon */}
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-orange-100 text-[var(--brand-orange)] animate-pulse">
                  <ShieldCheck className="h-6 w-6" />
                </div>

                <div>
                  <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">
                    Verify your email
                  </h2>
                  <p className="mt-2 text-sm text-gray-500 leading-relaxed font-medium">
                    We sent a 6-digit verification code to: <br />
                    <strong className="text-gray-800 break-all">{email}</strong>
                  </p>
                </div>

                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <FormField
                      control={form.control}
                      name="otp"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="block text-xs font-semibold text-gray-500 uppercase tracking-wider">
                            6-Digit Verification OTP
                          </FormLabel>
                          <FormControl>
                            <Input
                              type="text"
                              maxLength={6}
                              placeholder="123456"
                              className="w-full text-center tracking-[0.5em] text-lg font-black py-3 border border-gray-200 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--brand-orange)] focus:border-transparent h-auto"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full py-3 px-4 rounded-xl text-white font-bold bg-gradient-to-r from-orange-400 to-rose-400 hover:opacity-95 hover:shadow-lg transition-all text-sm flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                    >
                      {isLoading ? (
                        <>
                          <Loader2 className="h-4.5 w-4.5 animate-spin" />
                          Verifying...
                        </>
                      ) : (
                        "Verify Email"
                      )}
                    </button>
                  </form>
                </Form>

                <div className="text-center space-y-4 pt-2">
                  <div className="text-xs text-gray-500 font-medium">
                    Did not receive the OTP?{" "}
                    <button
                      type="button"
                      onClick={handleResendOTP}
                      disabled={isResending || resendCooldown > 0}
                      className="font-bold text-[var(--brand-orange)] hover:underline disabled:opacity-50"
                    >
                      {isResending
                        ? "Resending..."
                        : resendCooldown > 0
                        ? `Resend in ${resendCooldown}s`
                        : "Resend Code"}
                    </button>
                  </div>

                  <div className="pt-2 border-t border-gray-150">
                    <Link
                      to="/signup"
                      className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-gray-500 hover:text-[var(--brand-orange)] transition-colors"
                    >
                      <ArrowLeft className="h-4 w-4" />
                      Back to sign up
                    </Link>
                  </div>
                </div>
              </>
            ) : (
              <div className="text-center space-y-6 py-4 animate-fade-in">
                {/* Success Icon */}
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-600">
                  <CheckCircle2 className="h-10 w-10 animate-bounce" />
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 tracking-tight">
                    Verification successful!
                  </h2>
                  <p className="mt-2 text-sm text-gray-500 leading-relaxed font-semibold">
                    Your email has been verified. Redirecting you to your learning dashboard now...
                  </p>
                </div>

                <div className="flex justify-center">
                  <Loader2 className="h-6 w-6 text-[var(--brand-orange)] animate-spin" />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
