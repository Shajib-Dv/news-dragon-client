/** @format */

import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import RightSideBar from "./RightSideBar";

const News = () => {
  return (
    <>
      <div>
        <Header />
        <div className="text-white grid grid-cols-1 md:grid-cols-4 gap-4 p-10 my-10">
          <div className="md:col-span-3">
            <Outlet />
          </div>
          <div>
            <RightSideBar />
          </div>
        </div>
      </div>
    </>
  );
};

export default News;
