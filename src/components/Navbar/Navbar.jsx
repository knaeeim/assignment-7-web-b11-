import React from "react";
import { MdNotificationsNone } from "react-icons/md";

const Navbar = () => {
  return (
    <div className="">
      <div className="bg-base-100 shadow-sm md:px-10 px-5 py-3 flex justify-between gap-11 md:gap-0 items-center">
        <div className="">
          <a className="md:text-2xl text-lg font-bold text-blue-900">Auction<span className="text-orange-400">Gallary</span></a>
        </div>
        <div className="md:flex justify-center items-center gap-6 font-bold hidden">
            <h1>Home</h1>
            <h1>Auctions</h1>
            <h1>Categories</h1>
            <h1>How to works</h1>
        </div>
        <div className="flex gap-4">
            <div tabIndex={0} role="button" className="btn btn-sm md:btn-md btn-ghost btn-circle bg-zinc-200">
              <div className="indicator">
                <MdNotificationsNone md:size={35} size={25} />
                <span className="badge badge-xs indicator-item">8</span>
              </div>
            </div>
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-sm md:btn-md btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
