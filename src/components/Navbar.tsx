import ThemeModeToggle from "./ThemeModeToggle";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 z-50 w-full border-b border-b-white/10 text-white backdrop-blur-xl">
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between px-16 py-4">
        <div className="flex flex-row text-xl">
          <span className="decoration-2 underline-offset-4 hover:underline">
            <a href="https://mtkalms.github.io/portfolio/">portfolio</a>
          </span>
        </div>
        <div>
          <ThemeModeToggle />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
