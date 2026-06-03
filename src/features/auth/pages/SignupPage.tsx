import { useState, ChangeEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@/store";
import { registerUser } from "@/store/slices/authSlice";
import { UserPlus, Mail, Lock, Eye, EyeOff, User, Upload, X } from "lucide-react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
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

const signupSchema = z.object({
  fullName: z.string().min(1, "Full Name is required").max(100),
  email: z.string().min(1, "Email is required").email("Please enter a valid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  confirmPassword: z.string().min(6, "Confirm password must be at least 6 characters"),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"],
});

type SignupSchemaType = z.infer<typeof signupSchema>;

export const SignupPage = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { status } = useAppSelector((state) => state.auth);

  const [showPassword, setShowPassword] = useState(false);
  const [avatarFile, setAvatarFile] = useState<File | null>(null);
  const [avatarPreview, setAvatarPreview] = useState<string | null>(null);
  const [avatarError, setAvatarError] = useState("");

  // Retrieve pending registration inputs from localStorage if any
  const getPendingReg = () => {
    try {
      return JSON.parse(localStorage.getItem("pending_registration") || "{}");
    } catch {
      return {};
    }
  };
  const pendingReg = getPendingReg();

  const form = useForm<SignupSchemaType>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      fullName: pendingReg.fullName || "",
      email: pendingReg.email || "",
      password: "",
      confirmPassword: "",
    },
  });

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAvatarError("");
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 2 * 1024 * 1024) {
        setAvatarError("Image size must be less than 2MB.");
        return;
      }
      setAvatarFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatarPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const clearAvatar = () => {
    setAvatarFile(null);
    setAvatarPreview(null);
    setAvatarError("");
  };

  const onSubmit = async (data: SignupSchemaType) => {
    try {
      // Cache details locally to restore if user exits
      localStorage.setItem(
        "pending_registration",
        JSON.stringify({ fullName: data.fullName, email: data.email })
      );

      const formData = new FormData();
      formData.append("fullName", data.fullName);
      formData.append("email", data.email);
      formData.append("password", data.password);
      if (avatarFile) {
        formData.append("avatar", avatarFile);
      }

      await dispatch(registerUser(formData)).unwrap();
      toast.success("Verification OTP sent to your email!");
      navigate("/verify-email", { state: { email: data.email } });
    } catch (err: any) {
      const errStr = typeof err === "string" ? err : err?.message || "";
      if (
        errStr.includes("Email already registered but not verified") ||
        errStr.includes("verify your email")
      ) {
        toast.info("Email registered but not verified. Redirecting to verification...");
        // Ensure email is cached
        localStorage.setItem(
          "pending_registration",
          JSON.stringify({ fullName: data.fullName, email: data.email })
        );
        navigate("/verify-email", { state: { email: data.email } });
      } else {
        toast.error(err || "Registration failed. Please try again.");
      }
    }
  };

  const isLoading = status === "loading";

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

        {/* Right Side: Signup Form */}
        <div className="w-full md:w-1/2 p-8 sm:p-12 flex flex-col justify-center bg-white">
          <div className="max-w-md w-full mx-auto space-y-6">
            {/* Title Icon */}
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-orange-100 text-[var(--brand-orange)]">
              <UserPlus className="h-6 w-6" />
            </div>

            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">
                Create an account
              </h2>
              <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                Access your personalized path to mastering AI, Data Analytics, and real-world skills.
              </p>
            </div>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                {/* Profile Avatar Upload */}
                <div className="flex flex-col items-center space-y-2 mb-4">
                  <span className="block text-xs font-semibold text-gray-500 uppercase tracking-wider">
                    Profile Photo (Optional)
                  </span>
                  <div className="relative group">
                    <div className="w-20 h-20 rounded-full border-2 border-dashed border-gray-300 flex items-center justify-center overflow-hidden bg-gray-50 group-hover:border-[var(--brand-orange)] transition-colors relative animate-fade-in">
                      {avatarPreview ? (
                        <img src={avatarPreview} alt="Avatar Preview" className="w-full h-full object-cover" />
                      ) : (
                        <Upload className="h-6 w-6 text-gray-400 group-hover:text-[var(--brand-orange)] transition-colors" />
                      )}
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                        className="absolute inset-0 opacity-0 cursor-pointer"
                      />
                    </div>
                    {avatarPreview && (
                      <button
                        type="button"
                        onClick={clearAvatar}
                        className="absolute -top-1 -right-1 bg-red-100 text-red-600 rounded-full p-1 hover:bg-red-200 transition-colors shadow-sm"
                      >
                        <X className="h-3 w-3" />
                      </button>
                    )}
                  </div>
                  {avatarError && (
                    <p className="text-destructive text-sm font-medium">{avatarError}</p>
                  )}
                </div>

                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="block text-xs font-semibold text-gray-500 uppercase tracking-wider">
                        Full Name
                      </FormLabel>
                      <FormControl>
                        <div className="relative">
                          <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-gray-400">
                            <User className="h-4.5 w-4.5" />
                          </span>
                          <Input
                            type="text"
                            placeholder="John Doe"
                            className="w-full pl-11 pr-4 py-2.5 border border-gray-200 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--brand-orange)] focus:border-transparent text-sm text-gray-900 h-auto"
                            {...field}
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

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

                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="block text-xs font-semibold text-gray-500 uppercase tracking-wider">
                        Password
                      </FormLabel>
                      <FormControl>
                        <div className="relative">
                          <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-gray-400">
                            <Lock className="h-4.5 w-4.5" />
                          </span>
                          <Input
                            type={showPassword ? "text" : "password"}
                            placeholder="••••••••"
                            className="w-full pl-11 pr-10 py-2.5 border border-gray-200 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--brand-orange)] focus:border-transparent text-sm text-gray-900 h-auto"
                            {...field}
                          />
                          <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
                          >
                            {showPassword ? <EyeOff className="h-4.5 w-4.5" /> : <Eye className="h-4.5 w-4.5" />}
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
                        Confirm Password
                      </FormLabel>
                      <FormControl>
                        <div className="relative">
                          <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-gray-400">
                            <Lock className="h-4.5 w-4.5" />
                          </span>
                          <Input
                            type={showPassword ? "text" : "password"}
                            placeholder="••••••••"
                            className="w-full pl-11 pr-10 py-2.5 border border-gray-200 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--brand-orange)] focus:border-transparent text-sm text-gray-900 h-auto"
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
                  {isLoading ? "Creating account..." : "Create account"}
                  <UserPlus className="h-4.5 w-4.5" />
                </button>
              </form>
            </Form>

            {/* Commented out non-functional social logins for now
            <div className="relative flex py-2 items-center">
              <div className="flex-grow border-t border-gray-150"></div>
              <span className="flex-shrink mx-4 text-gray-400 text-xs font-semibold uppercase tracking-wider">
                or continue with
              </span>
              <div className="flex-grow border-t border-gray-150"></div>
            </div>

            <div className="grid grid-cols-3 gap-3">
              <button className="flex items-center justify-center py-2.5 px-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
                <svg className="h-5 w-5" viewBox="0 0 24 24">
                  <path
                    fill="#EA4335"
                    d="M12 5.04c1.62 0 3.08.56 4.22 1.65l3.16-3.16C17.47 1.7 14.93 1 12 1 7.35 1 3.39 3.65 1.5 7.5l3.79 2.94C6.18 7.37 8.87 5.04 12 5.04z"
                  />
                  <path
                    fill="#4285F4"
                    d="M23.49 12.27c0-.81-.07-1.59-.2-2.34H12v4.45h6.45c-.28 1.47-1.11 2.71-2.35 3.55l3.65 2.84c2.14-1.97 3.39-4.88 3.39-8.5z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.29 14.56c-.24-.72-.38-1.5-.38-2.31s.14-1.59.38-2.31L1.5 7.01C.54 8.94 0 11.11 0 13.41c0 2.3.54 4.47 1.5 6.4l3.79-2.94c-.24-.72-.38-1.5-.38-2.31z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c3.24 0 5.97-1.07 7.96-2.91l-3.65-2.84c-1.01.68-2.31 1.09-3.91 1.09-3.13 0-5.82-2.33-6.77-5.41L1.5 15.86C3.39 19.7 7.35 22.3 12 23z"
                  />
                </svg>
              </button>
              <button className="flex items-center justify-center py-2.5 px-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.162 22 16.418 22 12c0-5.523-4.523-10-10-10z"
                  />
                </svg>
              </button>
              <button className="flex items-center justify-center py-2.5 px-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.17c.66-.81 1.11-1.93.99-3.06-1 .04-2.22.67-2.94 1.51-.64.74-1.2 1.88-1.05 3 .1.03.2.05.3.05.9 0 2.04-.69 2.7-1.5" />
                </svg>
              </button>
            </div>
            */}

            <div className="text-center text-sm text-gray-500 pt-2">
              Already have an account?{" "}
              <Link
                to="/login"
                className="font-bold text-[var(--brand-orange)] hover:text-[var(--brand-red)] transition-colors"
              >
                Sign in
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
