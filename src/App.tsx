import "./App.css";
import Panorama from "./sections/Panorama";
import Textual from "./sections/Textual";
import SocialBadge from "./components/SocialBadge";
import ThemeModeToggle from "./components/ThemeModeToggle";

const navbarItems = [
  {
    label: "portfolio",
    href: "https://mtkalms.github.io/portfolio/",
  },
];

function App() {
  return (
    <>
      <nav className="fixed top-0 left-0 z-50 w-full border-b border-b-white/10 text-white">
        <div className="-mb-[2px] backdrop-blur-xl">
          <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between px-16">
            <div className="flex flex-row">
              {navbarItems.map((item) => (
                <div
                  className="transition-border border-b-2 border-b-transparent px-2 py-3 text-xl duration-300 hover:border-b-white"
                  key={item.label}
                >
                  <a href={item.href}>{item.label}</a>
                </div>
              ))}
            </div>
            <div className="flex flex-row">
              <ThemeModeToggle />
            </div>
          </div>
        </div>
        <div className="h-[2px] w-full backdrop-blur-3xl" />
      </nav>
      <Panorama />
      <div className="main">
        <Textual />
      </div>
      <div className="h-40 w-full bg-(--forest-1) mask-[url('./assets/pattern-stack.svg')] bg-size-[auto_100%] bg-repeat-x" />
      <footer className="bottom-0 w-full py-12">
        <div className="mx-auto flex max-w-screen-xl items-center justify-between px-16 py-4">
          <p className="text-sm opacity-80">
            © {new Date().getFullYear()} mtkalms. All rights reserved.
          </p>
          <div className="mb-6 flex justify-center gap-4">
            <SocialBadge
              type="Linkedin"
              href="https://linkedin.com/in/matthias-kalms"
            />
            <SocialBadge type="Github" href="https://github.com/mtkalms" />
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
