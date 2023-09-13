import { Linkbutton } from "./components/Linkbutton";

function Home() {
  return (
    <div className=" bg-gray-400 min-h-screen">
      <div className="pt-20 mb-20">
        <h1 className="text-center text-5xl font-bold">Generation Thailand</h1>
        <p className="text-center text-5xl font-bold">Recat - Assessment</p>
      </div>
      <Linkbutton />
    </div>
  );
}

export default Home;
