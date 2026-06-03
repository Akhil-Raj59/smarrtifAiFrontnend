import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "@/store";
import { UserDashboard } from "../components/UserDashboard";
import { AdminDashboard } from "../components/AdminDashboard";

export const DashboardPage = () => {
  const navigate = useNavigate();
  const { user, status } = useAppSelector((state) => state.auth);

  useEffect(() => {
    // If auth state is fully loaded and user is null, redirect to login
    if (status !== "loading" && !user) {
      navigate("/login");
    }
  }, [user, status, navigate]);

  if (status === "loading" && !user) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-[var(--brand-orange)] border-t-transparent rounded-full animate-spin"></div>
          <p className="text-gray-500 font-medium">Verifying authorization...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return null; // Let the redirect trigger
  }

  // Render AdminDashboard for ADMIN, else render UserDashboard
  if (user.role === "ADMIN") {
    return <AdminDashboard />;
  }

  return <UserDashboard />;
};
