import { Outlet } from "react-router-dom";
import DeshBord from "./components/DeshBord";
import { Nav } from "./components/Nav";

function App() {
  return (
    <>
      {/* <LineChart1 /> */}
      <Nav />
      <main className="max-w-[1440px] mx-auto">
        <DeshBord />
      </main>
    </>
  );
}

export default App;
