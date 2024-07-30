import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const SignupForm = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <div className="lg:pt-40 pt-20 pb-1 ">
        <form className="lg:max-w-sm mx-10   lg:mx-auto  lg:pb-40">
          <div className="mb-5" data-aos="flip-down" data-aos-duration="2000">
            <label
              for="user"
              className="block mb-2 text-sm font-medium text-fuchsia-500 dark:text-white"
            >
              User ID
            </label>
            <input
              type="user"
              id="user"
              className="bg-cyan-50 border border-fuchsia-500 text-fuchsia-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Bamban666hacker"
              required
            />
          </div>
          <div className="mb-5" data-aos="flip-down" data-aos-duration="2000">
            <label
              for="Name"
              className="block mb-2 text-sm font-medium text-fuchsia-500 dark:text-white"
            >
              Full Name
            </label>
            <input
              type="Name"
              id="Name"
              className="bg-cyan-50 border border-fuchsia-500 text-fuchsia-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Rudi Satoru"
              required
            />
          </div>
          <div className="mb-5" data-aos="flip-down" data-aos-duration="2000">
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
              placeholder="eko@example.com"
              required
            />
          </div>
          <div className="mb-5" data-aos="flip-down" data-aos-duration="2000">
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

          <button
            type="submit"
            data-aos="flip-down"
            data-aos-duration="2000"
            className="text-fuchsia-500 font-semibold bg-cyan-300 hover:bg-fuchsia-500 hover:text-cyan-300 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </form>{" "}
      </div>
      ;
    </div>
  );
};

export default SignupForm;
