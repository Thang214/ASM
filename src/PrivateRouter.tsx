import React from "react";
import { Navigate, Outlet } from "react-router-dom";

type Props = {
  children: React.ReactElement;
};

const PrivateRouter = ({ children }: Props) => {
  const userString = localStorage.getItem("user");
  if (!userString) {
    return <Navigate to="/no-access" />;
  }

  const { user } = JSON.parse(userString);
  if (!user || user.id !== 1) {
    return <Navigate to="/no-access" />;
  }

  return children ? children : <Outlet />;
};

export default PrivateRouter;
