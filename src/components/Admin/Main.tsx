import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div className="p-4 sm:ml-64 my-10 mt-15">
      <Outlet />
    </div>
  );
};

export default Main;
