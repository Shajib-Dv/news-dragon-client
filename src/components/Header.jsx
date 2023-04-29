/** @format */

import React, { useContext } from "react";
import logo from "../assets/logo.png";
import moment from "moment";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import avatar from "../assets/1.png";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  return (
    <>
      <div className="text-center py-4">
        <div className="flex justify-center">
          <img src={logo} alt="" />
        </div>
        <p>The dragon news provide extra news</p>
        <p>{moment().format("LLLL")}</p>
      </div>
      <div className="w-3/4 mx-auto flex">
        <button className="btn btn-error">Latest</button>
        <Marquee speed={50} gradient={false} pauseOnHover={true}>
          I can be a React component, multiple React components, or just some
          text. I can be a React component, multiple React components, or just
          some text.
        </Marquee>
      </div>

      <nav className="flex gap-4 justify-center items-center font-semibold my-4">
        <Link to="/">Home</Link>
        <Link to="/career">Career</Link>
        <Link to="/about">About</Link>
        <div className="md:ml-10">
          <div className="avatar">
            <div className="w-12  rounded-full ring ring-primary ">
              <img src={avatar} />
            </div>
          </div>
        </div>
        {user ? (
          <button onClick={() => logOut()} className="btn btn-xs">
            Log out
          </button>
        ) : (
          <Link to="/login">Login</Link>
        )}
        <Link to="/register">Register</Link>
      </nav>
    </>
  );
};

export default Header;
