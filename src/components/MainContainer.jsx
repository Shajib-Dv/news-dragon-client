/** @format */

import React, { useEffect, useState } from "react";
import LeftSideBar from "./LeftSideBar";
import RightSideBar from "./RightSideBar";
import { Link, Navigate } from "react-router-dom";
import NewsCard from "./NewsCard";

const MainContainer = () => {
  const [newses, setNewses] = useState([]);

  useEffect(() => {
    fetch("https://news-dragon-server-shajib-dv.vercel.app/news")
      .then((res) => res.json())
      .then((data) => setNewses(data))
      .catch((error) => console.log("Error", error.message));
  }, []);

  // console.log(newses);
  return (
    <div>
      {newses && newses.map((news) => <NewsCard key={news._id} news={news} />)}
    </div>
  );
};

export default MainContainer;
