import { Navigate, Outlet, useLocation } from "react-router";
import RolePaths from "../../config/permission";
import { AppSelectors } from "../slice";
import { useAppSelector } from "@services/store";
import GlobalLoading from "@components/GlobalLoading";

export function RouteWrapper() {
  const location = useLocation();
  const { role } = useAppSelector(AppSelectors.userInfo);
  const handleDestination = () => {
    return role === "guest"
      ? "/login"
      : !RolePaths["onlyGuest"].includes(location.pathname)
      ? "/permission-denied"
      : "/";
  };
  if (role === null) {
    return <GlobalLoading />;
  }

  const allowedRoutes = RolePaths[role as string] || [];

  if (!allowedRoutes.includes(location.pathname)) {
    return <Navigate to={handleDestination()} replace />;
  }

  return <Outlet />;
}
