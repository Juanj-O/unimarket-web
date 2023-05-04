import { Navigate, Outlet } from "react-router-dom";
// import { Cookie } from '../../infrastructure/cookie/Cookie'

export const AuthGuard = () => {
  //   const user = Cookie.getToken()

  return true ? <Outlet /> : <Navigate replace to={"login"} />;
};

export default AuthGuard;
