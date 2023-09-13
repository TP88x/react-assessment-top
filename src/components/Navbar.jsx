import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div>
      <nav className=" flex w-full flex-nowrap h-12 items-center justify-between bg-neutral-800 py-2 text-neutral-500 shadow-lg hover:text-neutral-700 focus:text-neutral-700 ">
        <div className="flex w-full flex-wrap items-center justify-between px-3">
          <div className="flex-grow basis-[100%] items-center ">
            <ul className="list-style-none mr-auto flex flex-row justify-end pl-0">
              <li className="m-4 pl-2 my-0 pr-1">
                <Link
                  to={"/"}
                  className="text-neutral-300 transition duration-200 hover:text-neutral-200 hover:ease-in-out focus:text-neutral-200"
                >
                  Home
                </Link>
              </li>
              <li className="m-4 pl-2 my-0 pr-1">
                <Link
                  to={"/Owner"}
                  className="text-neutral-300 transition duration-200 hover:text-neutral-200 hover:ease-in-out focus:text-neutral-200"
                >
                  Owner
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
