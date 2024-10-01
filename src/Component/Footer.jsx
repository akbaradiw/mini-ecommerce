import React from "react";

const Footer = () => {
  return (
    <footer className="bg-lime-50 border-t font-bold shadow-md   text-green-800 py-6">
      <div className="container mx-auto text-center">
        <p className="text-sm font-semibold">
          &copy; 2024 Your Company. All rights reserved.
        </p>
        <div className="mt-4">
          <a
            href="https://www.facebook.com"
            className="mx-2 font-semibold text-green-800 "
          >
            Privacy Policy
          </a>
          <a
            href="https://www.twitter.com"
            className="mx-2 font-semibold text-green-800"
          >
            Terms of Service
          </a>
          <a
            href="https://www.linkedin.com"
            className="mx-2 font-semibold text-green-800"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
