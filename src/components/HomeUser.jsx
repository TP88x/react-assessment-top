import React, { useContext } from "react";
import { Linkbutton } from "./Linkbutton";
import { DataContext } from "../Context";

export const HomeUser = () => {
  const data = useContext(DataContext);

  return (
    <div className=" bg-gray-400  min-h-screen pb-10">
      <div className="pt-20 mb-20 text-center">
        <h1 className="text-center text-5xl font-bold">Generation Thailand</h1>
        <p className="text-center text-5xl font-bold">Home - User Sector</p>
      </div>
      <Linkbutton />
      <table className="mt-20 min-w divide-y divide-gray-300 dark:divide-gray-700 m-auto">
        <thead className="bg-gray-200 dark:bg-gray-800">
          <tr>
            <th className="w-[200px] px-3 py-3 text-sm text-center font-blod text-gray-500 dark:text-gray-400">
              Name
            </th>
            <th className="w-[200px] px-3 py-3 text-sm font-blod text-center text-gray-500 dark:text-gray-400">
              Last Name
            </th>
            <th className="w-[200px] px-3 py-3 text-sm font-blod text-center text-gray-500 dark:text-gray-400">
              Position
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-50 dark:divide-gray-700 dark:bg-gray-900">
          {data.map((item, key) => (
            <tr key={key}>
              <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                {item.name}
              </td>
              <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                {item.lastname}
              </td>
              <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                {item.position}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
