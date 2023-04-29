/** @format */

import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import { FaShare, FaBookmark } from "react-icons/fa";

const NewsCard = ({ news }) => {
  // console.log(news);
  const {
    author,
    details,
    image_url,
    others_info,
    rating,
    thumbnail_url,
    title,
    total_view,
    _id,
  } = news;
  return (
    <>
      <div className="card card-compact w-full bg-base-100 shadow-xl mb-4">
        <div className="border-purple-400 shadow-xl p-2 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="avatar">
              <div className="w-20 rounded-full">
                <img src={author && author.img} />
              </div>
            </div>
            <div>
              <p>{author && author.name}</p>
              <p>
                {author && moment(`${author.published_date}`).format("LLLL")}
              </p>
            </div>
          </div>
          <div className="flex gap-2">
            <FaBookmark />
            <FaShare />
          </div>
        </div>
        <figure>
          <img src={thumbnail_url} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}!</h2>
          <p>
            {details.length > 150 ? details.slice(0, 150) + "..." : details}
            <Link to={`/news/${_id}`} className="btn btn-link">
              Reade more
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default NewsCard;
