/** @format */

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftSideBar = () => {
  const [catagories, setCatagories] = useState([]);

  useEffect(() => {
    fetch("https://news-dragon-server-shajib-dv.vercel.app/catagories")
      .then((res) => res.json())
      .then((data) => setCatagories(data))
      .catch((error) => console.log("error", error.message));
  }, []);

  return (
    <>
      <h2 className="text-2xl font-bold pb-4">All Catagories</h2>
      <div className="space-y-4 sticky top-10">
        {catagories &&
          catagories.map((category) => (
            <Link
              to={`/category/${category.id}`}
              className="block hover:text-yellow-100 hover:underline"
              key={category.id}
            >
              {category.name}
            </Link>
          ))}
      </div>
    </>
  );
};

export default LeftSideBar;
