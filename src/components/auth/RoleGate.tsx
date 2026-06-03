
import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useAppSelector } from "@/store";

interface RoleGateProps {
  children: ReactNode;
  allowedRoles: Array<"USER" | "ADMIN">;
  redirectTo?: string;
}

export function RoleGate({ children, allowedRoles, redirectTo = "/" }: RoleGateProps) {
  const { user } = useAppSelector((state) => state.auth);

  if (!user || !allowedRoles.includes(user.role)) {
    return <Navigate to={redirectTo} replace />;
  }

  return <>{children}</>;
}

export default RoleGate;
