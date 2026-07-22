
import React from "react";

function Navbar() {
  return (
    <div className="sticky top-0 z-20 flex justify-between items-center px-6 py-4 bg-[#40407a] shadow-md">

      <div className="flex items-center gap-3">
        <img
          className="w-10"
          src="https://movie-app-88kamal.vercel.app/clipart3105859.png"
          alt="logo"
        />

        <h1 className="text-2xl text-white font-bold">
          MovieMasala
        </h1>
      </div>

      <ul className="flex gap-6 text-white">
        <li className="cursor-pointer hover:text-gray-300">Home</li>
        <li className="cursor-pointer hover:text-gray-300">About</li>
        <li className="cursor-pointer hover:text-gray-300">Contact</li>
        <li className="cursor-pointer hover:text-gray-300">Services</li>
      </ul>

    </div>
  );
}

export default Navbar;