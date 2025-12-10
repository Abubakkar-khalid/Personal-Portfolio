import React from "react";

const Footer = () => {
  return (
    <footer className="py-8 relative overflow-hidden">
      <div className="w-full max-w-[78rem] mx-auto px-4 relative z-10 flex flex-col items-center justify-center">
        <p className="text-gray-600 dark:text-gray-400 text-sm font-medium">
          © {new Date().getFullYear()} All Rights Reserved by Abubakar Khalid.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
