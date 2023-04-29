/** @format */

import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const NewsDetails = () => {
  const news = useLoaderData();
  const { category_id, details, image_url, thumbnail_url, title } = news;
  console.log(news);
  return (
    <>
      <div className="card card-compact w-full bg-base-100 shadow-xl">
        <figure>
          <img src={image_url ? image_url : thumbnail_url} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{details}</p>
        </div>
        <div className="w-2/5">
          <Link to={`/category/${category_id}`} className="btn btn-accent">
            All news on this category
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-10 p-4">
        <div className="card card-compact w-full bg-base-100 shadow-xl">
          <figure>
            <img src={image_url ? image_url : thumbnail_url} />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{title}</h2>
            <p>{details.slice(0, 100)}</p>
          </div>
        </div>
        <div className="card card-compact w-full bg-base-100 shadow-xl">
          <figure>
            <img src={image_url ? image_url : thumbnail_url} />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{title}</h2>
            <p>{details.slice(0, 100)}</p>
          </div>
        </div>
        <div className="card card-compact w-full bg-base-100 shadow-xl">
          <figure>
            <img src={image_url ? image_url : thumbnail_url} />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{title}</h2>
            <p>{details.slice(0, 100)}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsDetails;
