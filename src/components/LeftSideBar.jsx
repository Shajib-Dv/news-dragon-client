/** @format */

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftSideBar = () => {
  const [catagories, setCatagories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/catagories")
      .then((res) => res.json())
      .then((data) => setCatagories(data))
      .catch((error) => console.log("error", error.message));
  }, []);

  return (
    <>
      <h2 className="text-2xl font-bold pb-4">All Catagories</h2>
      <div className="space-y-4">
        {catagories &&
          catagories.map((category) => (
            <Link to={category.id} className="block" key={category.id}>
              {category.name}
            </Link>
          ))}
      </div>
    </>
  );
};

export default LeftSideBar;
