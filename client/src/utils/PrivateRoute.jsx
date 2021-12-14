import { Navigate, Outlet, useLocation } from "react-router";

const RequireAuth = () => {
  let auth = localStorage.getItem("jwt_token");
  let location = useLocation();

  if (!auth) {
    return <Navigate replace to="/login" state={{ from: location }} />;
  }
  return <Outlet />;
};

export default RequireAuth;
