import React, { createContext, useState } from "react";
import axios from "axios";
import { useEffect } from "react";

export const DataContext = createContext({});

export const Context = ({ children }) => {
  const [reload, setReload] = useState(!true);
  const mockEmployees = [
    {
      id: 0,
      name: "mock",
      lastname: "mocklastname",
      position: "Manager *Cant del",
    },
    {
      id: 1,
      name: "employee 1",
      lastname: "em",
      position: "Engineer *Cant del",
    },
    {
      id: 2,
      name: "employee 2",
      lastname: "lord",
      position: "Designer *Cant del",
    },
  ];

  const [data, setData] = useState(mockEmployees);
  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(
        "https://jsd5-mock-backend.onrender.com/members"
      );
      setData((prevdata) => {
        console.log(response.data);
        return [...response.data, ...prevdata];
      });
    };
    getData();
  }, [reload]);
  console.log(data);

  return (
    <DataContext.Provider value={data} Reload={{ reload, setReload }}>
      {children}
    </DataContext.Provider>
  );
};
