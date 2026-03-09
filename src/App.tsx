import "./App.css";
import QrPopover from "./components/QrPopover";
import SocialBadge from "./components/SocialBadge";
import ThemeModeToggle from "./components/ThemeModeToggle";
import Panorama from "./sections/Panorama";
import Textual from "./sections/Textual";

const navbarItems = [
  {
    label: "portfolio",
    href: "https://mtkalms.github.io/portfolio/",
  },
];

const socialLinks = {
  linkedin: "https://linkedin.com/in/matthias-kalms",
  github: "https://github.com/mtkalms",
};

function App() {
  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 z-50 w-full border-b border-b-white/10 text-white">
        <div className="-mb-[2px] backdrop-blur-xl">
          <div className="mx-auto flex max-w-screen-xl flex-wrap items-stretch justify-between px-16">
            <div className="flex flex-row">
              {navbarItems.map((item) => (
                <a
                  className="transition-border border-b-2 border-b-transparent px-1 py-3 text-xl text-white/65 duration-300 hover:border-b-white hover:text-white"
                  key={item.label}
                  href={item.href}
                >
                  {item.label}
                </a>
              ))}
            </div>
            <div className="flex flex-row">
              <ThemeModeToggle className="transition-border flex border-b-2 border-b-transparent stroke-white/65 px-2 py-3 transition-colors duration-300 hover:border-b-white hover:stroke-white" />
              <QrPopover
                linkedinUrl={socialLinks.linkedin}
                githubUrl={socialLinks.github}
                className="transition-border flex border-b-2 border-b-transparent stroke-white/65 px-2 py-3 transition-colors duration-300 hover:border-b-white hover:stroke-white"
              />
            </div>
          </div>
        </div>
        <div className="h-px w-full backdrop-blur-2xl" />
        <div className="h-px w-full backdrop-blur-3xl" />
      </nav>
      {/* Main content */}
      <main>
        {/* Hero Section */}
        <Panorama />
        {/* Sections */}
        <div className="mt-[100vh] px-8 py-2 min-h-auto">
          <Textual />
        </div>
      </main>
      <div className="h-40 w-full bg-(--forest-1) mask-[url('./assets/pattern-stack.svg')] bg-size-[auto_100%] bg-repeat-x" />
      <footer className="bottom-0 w-full py-12">
        <div className="mx-auto flex max-w-screen-xl items-center justify-between px-16 py-4">
          <p className="text-sm opacity-80">
            © {new Date().getFullYear()} mtkalms. All rights reserved.
          </p>
          <div className="mb-6 flex justify-center gap-4">
            <SocialBadge type="Linkedin" href={socialLinks.linkedin} />
            <SocialBadge type="Github" href={socialLinks.github} />
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
