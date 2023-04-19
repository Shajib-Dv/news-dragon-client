/** @format */

import React, { useEffect, useState } from "react";
import LeftSideBar from "./LeftSideBar";
import RightSideBar from "./RightSideBar";

const MainContainer = () => {
  const [newses, setNewses] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/news")
      .then((res) => res.json())
      .then((data) => setNewses(data))
      .catch((error) => console.log("Error", error.message));
  }, []);

  //   console.log(news);
  return (
    <div className="text-white grid grid-cols-1 md:grid-cols-4 gap-4 p-10 my-10">
      <div className="">
        <LeftSideBar />
      </div>
      <div className="md:col-span-2">
        {newses && newses.map((news) => <p>{news.author?.name}</p>)}
      </div>
      <div className="">
        <RightSideBar />
      </div>
    </div>
  );
};

export default MainContainer;
