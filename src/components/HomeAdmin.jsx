import React, { useState } from "react";
import { Linkbutton } from "./Linkbutton";
import { DataContext } from "../Context";
import { useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const HomeAdmin = () => {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [position, setPosition] = useState("");
  const data = useContext(DataContext);

  // Validate
  const isValidate = () => {
    let proceed = true;
    let errMsg = "Please enter the value in : ";
    if (name === null || name === "" || name.length <= 4) {
      proceed = false;
      errMsg += "Name more than 4 letters, ";
    }
    if (lastname === null || lastname === "") {
      proceed = false;
      errMsg += "Lastname, ";
    }
    if (position === null || position === "") {
      proceed = false;
      errMsg += "Position ";
    }
    if (!proceed) {
      toast.warning(errMsg);
      console.log(errMsg);
    }
    return proceed;
  };

  const url = "https://jsd5-mock-backend.onrender.com/members";
  // POST
  const saveData = async () => {
    const id = uuidv4();
    if (isValidate()) {
      const response = await axios.post(url, {
        id: id,
        name: name,
        lastname: lastname,
        position: position,
      });
      toast.success("Registered successfully.");
      setTimeout(() => {
        window.location.reload();
      }, 2000);
      console.log("createData", response.status);
    }
  };
  // DELETE
  const deleteDate = async (id) => {
    const response = await axios.delete(
      `https://jsd5-mock-backend.onrender.com/member/${id}`
    );
    toast.error("Delete successfully.");
    setTimeout(() => {
      window.location.reload();
    }, 2000);
    console.log(response.status);
  };
  // DELETE ALL
  const deleteAllData = async () => {
    const currentData = await axios.get(url);
    for (const item of currentData.data) {
      await axios.delete(
        `https://jsd5-mock-backend.onrender.com/member/${item.id}`
      );
    }
    toast.error("Delete ALL successfully.");
    setTimeout(() => {
      window.location.reload();
    }, 2000);
  };

  return (
    <div className=" bg-gray-400 h-screen">
      <ToastContainer />
      <div className="pt-20 mb-10 text-center">
        <h1 className="text-center text-5xl font-bold">Generation Thailand</h1>
        <p className="text-center text-5xl font-bold">Home - Admin Sector</p>
      </div>
      <Linkbutton />
      <div className="flex-row items-center justify-center mt-10 px-10 m-auto max-w-[800px]">
        <p className="text-left mb-2 font-bold text-xl">Create User Here</p>
        <div className="md:flex justify-between ">
          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            className="dark:bg-gray-800 bg-gray-200 mr-3 text-white"
            type="text"
            placeholder="   Name"
          />
          <input
            onChange={(e) => setLastname(e.target.value)}
            value={lastname}
            className="dark:bg-gray-800 bg-gray-200 mr-3 text-white"
            type="text"
            placeholder="   Last Name"
          />
          <input
            onChange={(e) => setPosition(e.target.value)}
            value={position}
            className="dark:bg-gray-800 bg-gray-200 mr-3 text-white"
            type="text"
            placeholder="   Position"
          />
          <button
            onClick={saveData}
            className="flex items-center justify-center h-8 w-12 bg-gray-600  rounded font-semibold text-sm text-blue-100 hover:bg-gray-800"
          >
            Save
          </button>
        </div>
      </div>
      <div className="mt-5 w-[600px] text-right m-auto ">
        <button
          className="justify-center items-center h-8 px-5 bg-red-600 rounded font-semibold text-blue-100 hover:bg-yellow-500"
          onClick={() => deleteAllData()}
        >
          DeleteAll
        </button>
      </div>
      <table className="mt-5 min-w divide-y divide-gray-300 dark:divide-gray-700 m-auto">
        <thead className="bg-gray-200 dark:bg-gray-800">
          <tr>
            <th className="w-[150px] px-3 py-3 text-sm text-center font-blod text-gray-500 dark:text-gray-400">
              Name
            </th>
            <th className="w-[150px] px-3 py-3 text-sm font-blod text-center text-gray-500 dark:text-gray-400">
              Last Name
            </th>
            <th className="w-[150px] px-3 py-3 text-sm font-blod text-center text-gray-500 dark:text-gray-400">
              Position
            </th>
            <th className="w-[150px] px-3 py-3 text-sm font-blod text-center text-gray-500 dark:text-gray-400">
              Action
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-50 dark:divide-gray-700 dark:bg-gray-900">
          {data.map((item, key) => (
            <tr key={key}>
              <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 ">
                {item.name}
              </td>
              <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 ">
                {item.lastname}
              </td>
              <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 ">
                {item.position}
              </td>
              <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 ">
                <button onClick={() => deleteDate(item.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
