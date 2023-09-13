import React from "react";
import { Link } from "react-router-dom";

export const Linkbutton = () => {
  return (
    <>
      <div className="flex justify-center">
        <Link
          to={"/HomeNormal"}
          className="flex items-center justify-center h-12 px-6 w-64 mx-20 bg-gray-600 mt-8 rounded font-semibold text-sm text-blue-100 hover:bg-gray-800"
        >
          User Home Sector
        </Link>
        <Link
          to={"/HomeAdmin"}
          className="flex items-center justify-center h-12 px-6 w-64 mx-20 bg-gray-600 mt-8 rounded font-semibold text-sm text-blue-100 hover:bg-gray-800"
        >
          Admin Home Sector
        </Link>
      </div>
    </>
  );
};
