import { IconMoon, IconSun } from "./Icons";

interface NavTypes {
  isDarkMode: boolean;
  toggle: () => void;
}

export default function Navbar({ isDarkMode, toggle }: NavTypes) {
  const background = isDarkMode ? "bg-dark-blue text-white" : "bg-white text-black"

  return (
    <header className={`${background} shadow mb-20 absolute top-0 w-full`}>
      <nav className="flex justify-between font-bold py-6 px-7">
        <h1 className="text-2xl">Where in the world?</h1>
        <button type="button" onClick={toggle}>
          {isDarkMode ? (
            <IconSun color="#ffff00" />
          ) : (
            <IconMoon color="currentColor" />
          )}
        </button>
      </nav>
    </header>
  );
}
