import { Outlet, useLoaderData } from "react-router-dom";
import DeshBord from "./components/DeshBord";
import { Nav } from "./components/Nav";

function App() {
  const data = useLoaderData();
  console.log(data.data);
  return (
    <>
      {/* <LineChart1 /> */}
      <Outlet />
      <Nav />
      <main className="max-w-[1440px] mx-auto">
        <DeshBord />
      </main>
    </>
  );
}

export default App;
