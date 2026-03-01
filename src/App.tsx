import "./App.css";
import Navbar from "./components/Navbar";
import Panorama from "./sections/Panorama";
import Textual from "./sections/Textual";
import SocialBadge from "./components/SocialBadge";
function App() {
  return (
    <>
      <Navbar />
      <Panorama />
      <div className="main">
        <Textual />
      </div>
      <div className="h-40 w-full bg-(--text-default) mask-[url('./assets/pattern-stack.svg')] bg-size-[auto_100%] bg-repeat-x opacity-25" />
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
