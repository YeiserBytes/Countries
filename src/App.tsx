import { Route, Routes } from "react-router";
import { useDarkMode } from "usehooks-ts";
import "./App.scss";
import Navbar from "./Components/Navbar";
import FlagDetails from "./pages/FlagDetails";
import Flags from "./pages/Flags";

function App() {
  const { isDarkMode, toggle } = useDarkMode();

  return (
    <div
      className={`${
        isDarkMode
          ? "bg-very-light-gray text-black"
          : "bg-very-dark-blue text-white"
      }`}
    >
      <Navbar isDarkMode={!isDarkMode} toggle={toggle} />

      <Routes>
        <Route path="/" Component={Flags} />
        <Route path="/:countryName" Component={FlagDetails} />
      </Routes>
    </div>
  );
}

export default App;
