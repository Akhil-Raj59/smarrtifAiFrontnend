import { createBrowserRouter } from "react-router-dom";
import { RootLayout } from "./layouts/root-layout";
import { HomePage } from "@/features/home";
import { ProgramsPage } from "@/features/programs";
import { AssessmentPage } from "@/features/assessment";
import { CorporateTrainingPage } from "@/features/corporate";
import { DashboardPage } from "@/features/dashboard";
import { TeamPage } from "@/features/team";
import { WebinarsPage } from "@/features/webinars";
import { EventsPage } from "@/features/events";
import { BlogPage } from "@/features/blog";
import { CareersPage } from "@/features/careers";
import { LoginPage, SignupPage, ForgotPasswordPage, ResetPasswordPage, ChangePasswordPage, EmailVerificationPage } from "@/features/auth";
import { ContactPage } from "@/features/contact";
import { ProtectedRoute } from "@/components/auth/ProtectedRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "programs", element: <ProgramsPage /> },
      { path: "assessment", element: <AssessmentPage /> },
      { path: "corporate-training", element: <CorporateTrainingPage /> },
      { path: "dashboard", element: <ProtectedRoute><DashboardPage /></ProtectedRoute> },
      { path: "team", element: <TeamPage /> },
      { path: "webinars", element: <WebinarsPage /> },
      { path: "events", element: <EventsPage /> },
      { path: "blog", element: <BlogPage /> },
      { path: "careers", element: <CareersPage /> },
      { path: "contact-us", element: <ContactPage /> },
      { path: "login", element: <LoginPage /> },
      { path: "signup", element: <SignupPage /> },
      { path: "verify-email", element: <EmailVerificationPage /> },
      { path: "forgot-password", element: <ForgotPasswordPage /> },
      { path: "forget-password/:resetToken", element: <ResetPasswordPage /> },
      { path: "reset-password/:resetToken", element: <ResetPasswordPage /> },
      { path: "change-password", element: <ProtectedRoute><ChangePasswordPage /></ProtectedRoute> },
    ],
  },
]);