/** @format */

import React from "react";
import qzone1 from "../assets/qZone1.png";
import qzone2 from "../assets/qZone2.png";
import qzone3 from "../assets/qZone3.png";
import bg from "../assets/bg.png";

import {
  FaGoogle,
  FaGithub,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

const RightSideBar = () => {
  return (
    <>
      <div className="text-center space-y-3">
        <h3 className="text-3xl  font-bold">Login with</h3>
        <button className="btn gap-2 btn-outline btn-primary">
          <FaGoogle /> login with google
        </button>
        <button className="btn gap-2 btn-outline btn-secondary">
          <FaGithub /> login with github
        </button>
        <h3 className="text-3xl  font-bold">Find us on</h3>
        <div className="flex flex-col">
          <button className="btn btn-outline gap-4">
            <FaFacebook />
            Facebook
          </button>
          <button className="btn btn-outline gap-4">
            <FaTwitter />
            Twitter
          </button>
          <button className="btn btn-outline gap-4">
            <FaInstagram />
            Instargam
          </button>
        </div>
        <div className="bg-slate-400 flex flex-col ">
          <img src={qzone1} alt="" />
          <img src={qzone2} alt="" />
          <img src={qzone3} alt="" />
        </div>
        <div
          style={{ "--image-url": `url(${bg})` }}
          className="h-full py-10 px-4 bg-[image:var(--image-url)]"
        >
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Create an Amazing newspaper</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti
              enim reprehenderit eveniet dolor neque aperiam quod provident
              molestiae ducimus tempore.
            </p>
            <button className="btn btn-error">Learn more</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default RightSideBar;
