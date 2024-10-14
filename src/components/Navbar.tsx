import ThemeModeToggle from "./ThemeModeToggle";

function Navbar() {
  return <nav className="absolute w-full top-0 left-0">
    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <div>

      </div>
      <div>
        <ThemeModeToggle/>
      </div>
    </div>
  </nav>
}

export default Navbar;