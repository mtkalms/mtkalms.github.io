import "./App.css";
import Navbar from "./components/Navbar";
import Panorama from "./sections/Panorama";
import { useParallax } from "./components/Parallax";
import Textual from "./sections/Textual";
import SocialBadge from "./components/SocialBadge";
import Introduction from "./sections/Introduction";

function App() {
  useParallax();
  return (
    <>
      <Navbar />
      <Panorama />
      <div className="main">
        <Introduction />
        <Textual />
      </div>
      <footer className="w-full bottom-0 py-12">
        <div className="px-16 py-4 flex justify-between">
          <p className="text-sm opacity-70">
            © {new Date().getFullYear()} mtkalms. All rights reserved.
          </p>
          <div className="flex justify-center gap-4 mb-6">
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
