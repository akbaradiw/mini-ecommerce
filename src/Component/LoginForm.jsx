import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const LoginForm = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="lg:py-40  pt-20 py-10">
      <form className="lg:max-w-sm mx-10   lg:mx-auto pb-40 lg:pb-60">
        <div className="mb-5" data-aos="flip-up" data-aos-duration="2000">
          <label
            for="email"
            className="block mb-2 text-sm font-medium text-fuchsia-500 dark:text-white"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            className="bg-cyan-50 border border-fuchsia-500 text-fuchsia-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="yanti@example.com"
            required
          />
        </div>
        <div className="mb-5" data-aos="flip-up" data-aos-duration="2000">
          <label
            for="password"
            className="block mb-2 text-sm font-medium text-fuchsia-500 dark:text-white"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            className="bg-cyan-50 border border-fuchsia-500 text-fuchsia-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <div
          className="flex items-start mb-5"
          data-aos="flip-up"
          data-aos-duration="2000"
        >
          <div className="flex items-center h-5">
            <input
              id="remember"
              type="checkbox"
              value=""
              className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
              required
            />
          </div>
          <label
            for="remember"
            className="ms-2 text-sm font-medium text-fuchsia-500 dark:text-gray-300"
          >
            Remember me
          </label>
        </div>
        <button
          data-aos="flip-up"
          data-aos-duration="2000"
          type="submit"
          className="text-fuchsia-500 font-semibold bg-cyan-300 hover:bg-fuchsia-500 hover:text-cyan-300 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>{" "}
    </div>
  );
};

export default LoginForm;
