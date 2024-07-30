import { Outlet } from "react-router-dom";
import Navbar from "../components/Admin/Navbar";

const Admin = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      {/* <Aside /> */}
    </div>
  );
};

export default Admin;
