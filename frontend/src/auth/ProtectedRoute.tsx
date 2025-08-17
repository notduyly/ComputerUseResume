import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import type { ReactNode } from "react";

interface ProtectedRouteProps {
  children: ReactNode;
}

export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { isAuthenticated } = useAuth();

  // If not auth re-direct to login page and becomes top of history stack
  if (!isAuthenticated) {
    return <Navigate to='/login' replace />;
  }

  // If logged in render children component
  return <>{children}</>;
};