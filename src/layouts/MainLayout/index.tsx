import React from "react";
import Header from "./MainLayoutHeader";
import Footer from "./MainLayoutFooter";
import { Outlet } from "react-router";
import SideBar from "./SideBar";

const MainLayout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center w-full">
      <Header />
      <div className="grow flex w-full">
        <SideBar />
        <div className="grow flex flex-col w-full">
          <Outlet />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default MainLayout;
