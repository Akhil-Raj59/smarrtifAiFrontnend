import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Lock, Eye, EyeOff, CheckCircle2, ArrowRight, KeyRound } from "lucide-react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAppDispatch } from "@/store";
import { changePasswordUser } from "@/store/slices/authSlice";
import { toast } from "sonner";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const changePasswordSchema = z
  .object({
    oldPassword: z.string().min(1, "Current password is required"),
    newPassword: z.string().min(6, "New password must be at least 6 characters"),
    confirmPassword: z.string().min(6, "Confirm password must be at least 6 characters"),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "New passwords do not match",
    path: ["confirmPassword"],
  })
  .refine((data) => data.oldPassword !== data.newPassword, {
    message: "New password cannot be the same as your current password",
    path: ["newPassword"],
  });

type ChangePasswordSchemaType = z.infer<typeof changePasswordSchema>;

export const ChangePasswordPage = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useForm<ChangePasswordSchemaType>({
    resolver: zodResolver(changePasswordSchema),
    defaultValues: {
      oldPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (data: ChangePasswordSchemaType) => {
    setIsLoading(true);
    try {
      await dispatch(
        changePasswordUser({
          oldPassword: data.oldPassword,
          newPassword: data.newPassword,
        })
      ).unwrap();
      setIsSuccess(true);
      toast.success("Password changed successfully!");
    } catch (err: any) {
      toast.error(err || "Failed to change password. Please try again.");
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
              Keep your account secure with regular password updates
            </h2>
          </div>
        </div>

        {/* Right Side: Form / Success state */}
        <div className="w-full md:w-1/2 p-8 sm:p-12 flex flex-col justify-center bg-white">
          <div className="max-w-md w-full mx-auto space-y-6">
            {!isSuccess ? (
              <>
                {/* Title Icon */}
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-orange-100 text-[var(--brand-orange)]">
                  <KeyRound className="h-6 w-6" />
                </div>

                <div>
                  <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">
                    Change Password
                  </h2>
                  <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                    Update your password to ensure your account remains safe and private.
                  </p>
                </div>

                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <FormField
                      control={form.control}
                      name="oldPassword"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="block text-xs font-semibold text-gray-500 uppercase tracking-wider">
                            Current Password
                          </FormLabel>
                          <FormControl>
                            <div className="relative">
                              <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-gray-400">
                                <Lock className="h-4.5 w-4.5" />
                              </span>
                              <Input
                                type={showOldPassword ? "text" : "password"}
                                placeholder="••••••••"
                                className="w-full pl-11 pr-10 py-2.5 border border-gray-200 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--brand-orange)] focus:border-transparent text-sm text-gray-900 h-auto"
                                {...field}
                              />
                              <button
                                type="button"
                                onClick={() => setShowOldPassword(!showOldPassword)}
                                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
                              >
                                {showOldPassword ? <EyeOff className="h-4.5 w-4.5" /> : <Eye className="h-4.5 w-4.5" />}
                              </button>
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="newPassword"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="block text-xs font-semibold text-gray-500 uppercase tracking-wider">
                            New Password
                          </FormLabel>
                          <FormControl>
                            <div className="relative">
                              <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-gray-400">
                                <Lock className="h-4.5 w-4.5" />
                              </span>
                              <Input
                                type={showNewPassword ? "text" : "password"}
                                placeholder="••••••••"
                                className="w-full pl-11 pr-10 py-2.5 border border-gray-200 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--brand-orange)] focus:border-transparent text-sm text-gray-900 h-auto"
                                {...field}
                              />
                              <button
                                type="button"
                                onClick={() => setShowNewPassword(!showNewPassword)}
                                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
                              >
                                {showNewPassword ? <EyeOff className="h-4.5 w-4.5" /> : <Eye className="h-4.5 w-4.5" />}
                              </button>
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="confirmPassword"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="block text-xs font-semibold text-gray-500 uppercase tracking-wider">
                            Confirm New Password
                          </FormLabel>
                          <FormControl>
                            <div className="relative">
                              <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-gray-400">
                                <Lock className="h-4.5 w-4.5" />
                              </span>
                              <Input
                                type={showConfirmPassword ? "text" : "password"}
                                placeholder="••••••••"
                                className="w-full pl-11 pr-10 py-2.5 border border-gray-200 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--brand-orange)] focus:border-transparent text-sm text-gray-900 h-auto"
                                {...field}
                              />
                              <button
                                type="button"
                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
                              >
                                {showConfirmPassword ? <EyeOff className="h-4.5 w-4.5" /> : <Eye className="h-4.5 w-4.5" />}
                              </button>
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
                      {isLoading ? "Saving changes..." : "Change Password"}
                    </button>
                  </form>
                </Form>
              </>
            ) : (
              <div className="text-center space-y-6 py-4 animate-fade-in">
                {/* Success Icon */}
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-600">
                  <CheckCircle2 className="h-10 w-10" />
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 tracking-tight">
                    Password updated!
                  </h2>
                  <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                    Your password has been successfully changed.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => navigate("/")}
                  className="w-full py-3 px-4 rounded-xl text-white font-bold bg-gradient-to-r from-orange-400 to-rose-400 hover:opacity-95 hover:shadow-lg transition-all text-sm flex items-center justify-center gap-2 cursor-pointer"
                >
                  Go to home
                  <ArrowRight className="h-4.5 w-4.5" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
