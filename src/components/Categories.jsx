/** @format */

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NewsCard from "./NewsCard";

const Categories = () => {
  const { id } = useParams();
  const [news, setNews] = useState([]);
  // console.log(news);
  useEffect(() => {
    fetch(`http://localhost:5000/news/category/${id}`)
      .then((res) => res.json())
      .then((data) => setNews(data))
      .catch((error) => console.log(error.message));
  }, [id]);
  return (
    <div>
      {news.length > 0 ? (
        news.map((news) => <NewsCard key={news._id} news={news} />)
      ) : (
        <div>No news found</div>
      )}
    </div>
  );
};

export default Categories;
