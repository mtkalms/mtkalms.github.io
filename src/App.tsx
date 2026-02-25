import "./App.css";
import Navbar from "./components/Navbar";
import Panorama from "./sections/Panorama";
import Textual from "./sections/Textual";
import SocialBadge from "./components/SocialBadge";
import Introduction from "./sections/Introduction";

function App() {
  return (
    <>
      <Navbar />
      <Panorama />
      <div className="main">
        <Introduction />
        <Textual />
      </div>
      <footer className="bottom-0 w-full py-12">
        <div className="flex justify-between px-16 py-4">
          <p className="text-sm opacity-70">
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
