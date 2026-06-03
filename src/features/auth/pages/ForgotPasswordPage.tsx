import { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, ArrowLeft, KeyRound, CheckCircle2 } from "lucide-react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
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

const forgotPasswordSchema = z.object({
  email: z.string().min(1, "Email is required").email("Please enter a valid email address"),
});

type ForgotPasswordSchemaType = z.infer<typeof forgotPasswordSchema>;

export const ForgotPasswordPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedEmail, setSubmittedEmail] = useState("");
  const [resetUrl, setResetUrl] = useState("");

  const form = useForm<ForgotPasswordSchemaType>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (data: ForgotPasswordSchemaType) => {
    setIsLoading(true);
    try {
      const response = await authService.forgotPassword(data.email);
      if (response && response.success) {
        setSubmittedEmail(data.email);
        setResetUrl(response.resetPasswordUrl || "");
        setIsSubmitted(true);
        toast.success(response.message || "Reset link sent to your email!");
      } else {
        toast.error(response?.message || "Failed to send reset link. Please try again.");
      }
    } catch (err: any) {
      const errMsg = err.response?.data?.message || err.message || "Failed to send reset link.";
      toast.error(errMsg);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-gray-50/50 flex items-center justify-center p-4 py-12 sm:px-6 lg:px-8">
      <div className="bg-white rounded-3xl shadow-xl border border-gray-100 flex flex-col md:flex-row max-w-4xl w-full overflow-hidden min-h-[550px] animate-fade-in">
        {/* Left Side: Blur Gradient Panel */}
        <div className="hidden md:flex md:w-1/2 bg-gradient-to-br from-orange-400 via-red-500 to-rose-600 p-12 flex-col justify-end relative overflow-hidden">
          {/* Blur circles */}
          <div className="absolute top-[-10%] right-[-10%] w-72 h-72 rounded-full bg-yellow-300/40 blur-3xl" />
          <div className="absolute bottom-[20%] left-[-10%] w-80 h-80 rounded-full bg-rose-500/30 blur-3xl" />
          <div className="absolute inset-0 bg-black/5" />

          <div className="relative z-10 space-y-4">
            <h2 className="text-3xl font-extrabold text-white leading-tight">
              Your gateway to hands-on learning and career transformation
            </h2>
          </div>
        </div>

        {/* Right Side: Form / Success Card */}
        <div className="w-full md:w-1/2 p-8 sm:p-12 flex flex-col justify-center bg-white">
          <div className="max-w-md w-full mx-auto space-y-6">
            {!isSubmitted ? (
              <>
                {/* Title Icon */}
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-orange-100 text-[var(--brand-orange)]">
                  <KeyRound className="h-6 w-6" />
                </div>

                <div>
                  <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">
                    Forgot password?
                  </h2>
                  <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                    Enter the email address associated with your account, and we'll email you a link to reset your password.
                  </p>
                </div>

                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="block text-xs font-semibold text-gray-500 uppercase tracking-wider">
                            Email Address
                          </FormLabel>
                          <FormControl>
                            <div className="relative">
                              <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-gray-400">
                                <Mail className="h-4.5 w-4.5" />
                              </span>
                              <Input
                                type="email"
                                placeholder="name@company.com"
                                className="w-full pl-11 pr-4 py-2.5 border border-gray-200 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--brand-orange)] focus:border-transparent text-sm text-gray-900 h-auto"
                                {...field}
                              />
                            </div>
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
                      {isLoading ? "Sending link..." : "Send reset link"}
                    </button>
                  </form>
                </Form>

                <div className="text-center pt-2">
                  <Link
                    to="/login"
                    className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-gray-500 hover:text-[var(--brand-orange)] transition-colors"
                  >
                    <ArrowLeft className="h-4 w-4" />
                    Back to login
                  </Link>
                </div>
              </>
            ) : (
              <div className="text-center space-y-6 py-4 animate-fade-in">
                {/* Success Icon */}
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-600">
                  <CheckCircle2 className="h-10 w-10" />
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 tracking-tight">
                    Reset link sent!
                  </h2>
                  <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                    We've sent a password reset link to <strong className="text-gray-700">{submittedEmail}</strong>. Please check your inbox.
                  </p>
                </div>

                {resetUrl && (
                  <div className="p-4 bg-orange-50 border border-orange-200 rounded-2xl text-xs text-left text-orange-850 leading-relaxed space-y-1.5 shadow-xs">
                    <strong>Development Assistant:</strong> Email was generated successfully. For testing purposes, you can reset your password directly using the button below:
                    <a
                      href={resetUrl}
                      className="mt-1 inline-flex items-center justify-center w-full py-2 px-3 border border-[var(--brand-orange)] text-[var(--brand-orange)] font-bold rounded-lg hover:bg-[var(--brand-orange)] hover:text-white transition-all text-center text-xs"
                    >
                      Reset Password Now
                    </a>
                  </div>
                )}

                <div className="p-4 bg-gray-50 border border-gray-150 rounded-2xl text-xs text-left text-gray-550 leading-relaxed">
                  <strong>Tip:</strong> If you don't receive the email within a few minutes, check your spam or junk folder, or click below to re-enter your email.
                </div>

                <button
                  type="button"
                  onClick={form.handleSubmit(onSubmit)}
                  disabled={isLoading}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--brand-orange)] hover:underline disabled:opacity-50"
                >
                  {isLoading ? "Resending..." : "Did not receive? Resend link"}
                </button>

                <div className="pt-4 border-t border-gray-150">
                  <Link
                    to="/login"
                    className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-gray-500 hover:text-[var(--brand-orange)] transition-colors"
                  >
                    <ArrowLeft className="h-4 w-4" />
                    Back to login
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
