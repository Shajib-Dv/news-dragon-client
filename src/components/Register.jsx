/** @format */

import React, { useContext, useState } from "react";
import Header from "./Header";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Register = () => {
  const { user, createUser } = useContext(AuthContext);
  const [accepted, setAccepted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        e.target.reset();
      })
      .catch((error) => console.log(error.message));
  };
  return (
    <>
      <Header />
      <div className="mx-auto my-20 w-1/2 h-full  ">
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <div className="mb-4">
            <div className="flex flex-wrap -mx-3 mb-2">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block text-black font-bold mb-2"
                  htmlFor="firstName"
                >
                  First Name
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                  id="firstName"
                  type="text"
                  placeholder="First Name"
                  name="firstName"
                  required
                />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label
                  className="block text-black font-bold mb-2"
                  htmlFor="lastName"
                >
                  Last Name
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                  id="lastName"
                  type="text"
                  placeholder="Last Name"
                  name="lastName"
                />
              </div>
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-black font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Email"
              name="email"
              required
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-black font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Password"
              name="password"
              required
            />
          </div>
          <input
            onClick={() => setAccepted(!accepted)}
            type="checkbox"
            name="checkbox"
            id="checkbox"
          />
          <label
            htmlFor="checkbox"
            className="inline-block text-green-500 pl-2 pb-2"
          >
            Accept all term's and conditions
          </label>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 disabled:bg-gray-500 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
              disabled={!accepted}
            >
              Register
            </button>
          </div>
          <p className="text-green-600 pt-4 font-semibold">
            Already have an account ! please
            <Link className="btn btn-link" to="/login">
              Login
            </Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default Register;
