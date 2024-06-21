import { Outlet } from "react-router-dom";
import { Header } from "../Header";

export const MainLayout = () => {
  return (
    <div className="p-5">
      <Header />
      <Outlet />
    </div>
  );
};
