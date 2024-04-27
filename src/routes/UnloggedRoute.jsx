import { useSelector } from "react-redux";
import { Navigate } from "react-router";

const UnloggedRoute = ({ children }) => {
  const isAuth = useSelector(({ auth }) => auth.isAuth);
  return isAuth ? children : <Navigate to="/login" />;
};

export default UnloggedRoute;
