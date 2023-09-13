import { Navbar } from "./components/Navbar"
import { Owner } from "./components/Owner"
import { Link } from "react-router-dom";
import { Linkbutton } from "./components/Linkbutton";



const mockEmployees = [
  {
    id: 0,
    name: "mock",
    lastname: 'mocklastname',
    position: "Manager"
  },
  {
    id: 1,
    name: "employee 1",
    lastname: "em",
    position: "Engineer"
  },
  {
    id: 2,
    name: "employee 2",
    lastname: "lord",
    position: "Designer"
  },
]

function Home() {


  return (
    <>
      <div className="mt-20 mb-20">
        <h1 className="text-center text-5xl font-bold">Generation Thailand</h1>
        <p className="text-center text-5xl font-bold">Recat - Assessment</p>
      </div>
    <Linkbutton/>
    </>
  )
}

export default Home
