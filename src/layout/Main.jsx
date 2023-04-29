/** @format */

import React from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import LeftSideBar from "../components/LeftSideBar";
import RightSideBar from "../components/RightSideBar";

const Main = () => {
  return (
    <div>
      <Header />
      <div className="text-white grid grid-cols-1 md:grid-cols-4 gap-4 p-10 my-10">
        <div>
          <LeftSideBar />
        </div>
        <div className="md:col-span-2">
          <Outlet />
        </div>
        <div>
          <RightSideBar />
        </div>
      </div>
    </div>
  );
};

export default Main;
