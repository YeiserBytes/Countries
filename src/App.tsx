import { Route, Routes } from "react-router";
import { useDarkMode } from "usehooks-ts";
import "./App.scss";
import Navbar from "./Components/Navbar";
import FlagDetails from "./pages/FlagDetails";
import Flags from "./pages/Flags";

export default function App() {
  const { isDarkMode, toggle } = useDarkMode();
  const background = isDarkMode ? "bg-very-dark-blue text-white" : "bg-very-light-gray text-black"

  return (
    <div className={background}>
      <Navbar isDarkMode={isDarkMode} toggle={toggle} />

      <Routes>
        <Route path="/" Component={Flags} />
        <Route path="/:countryName" Component={FlagDetails} />
      </Routes>
    </div>
  );
}
