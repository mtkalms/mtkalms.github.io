import ThemeModeToggle from "./ThemeModeToggle";

function Navbar() {
  return <nav className="absolute w-full top-0 left-0">
    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <div className="flex flex-row text-xl">
        <span className="hover:underline decoration-2 underline-offset-4">
          <a href="https://mtkalms.github.io/portfolio/">
            portfolio
          </a>
        </span>
      </div>
      <div>
        <ThemeModeToggle/>
      </div>
    </div>
  </nav>
}

export default Navbar;