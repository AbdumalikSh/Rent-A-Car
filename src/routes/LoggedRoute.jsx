import { useSelector } from "react-redux";
import { Navigate } from "react-router";

const LoggedRoute = ({ children }) => {
  const isAuth = useSelector(({ auth }) => auth.isAuth);
  return isAuth ? <Navigate to='/'/> : children;
};

export default LoggedRoute;
