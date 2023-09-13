import React, { createContext, useState } from "react";
import axios from "axios";
import { useEffect } from "react";

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
    lastname: "em mock",
    position: "Engineer *Cant del",
  },
  {
    id: 2,
    name: "employee 2",
    lastname: "lord mock",
    position: "Designer *Cant del",
  },
];

export const DataContext = createContext();
export const Context = ({ children }) => {
  const [reload, setReload] = useState(!true);
  const [data, setData] = useState(mockEmployees);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://jsd5-mock-backend.onrender.com/members"
        );
        setData((prevdata) => {
          return [...response.data, ...prevdata];
        });
        setReload(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [reload]);

  return (
    <DataContext.Provider value={{ data, reload, setReload }}>
      {children}
    </DataContext.Provider>
  );
};
