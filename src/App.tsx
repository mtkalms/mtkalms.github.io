import { useRef } from "react";
import "./App.css";
import QrPopover, { QrCodeEntry } from "./components/QrPopover";
import SocialBadge from "./components/SocialBadge";
import ThemeModeToggle from "./components/ThemeModeToggle";
import useDismissable from "./hooks/dismissable";
import Panorama from "./sections/Panorama";
import Textual from "./sections/Textual";
import { TbQrcode as Qrcode } from "react-icons/tb";

const navbarItems = [
  {
    label: "Portfolio",
    href: "https://mtkalms.github.io/portfolio/",
  },
];

const socialLinks = new Map<string, QrCodeEntry>([
  [
    "linkedin",
    {
      title: "LinkedIn",
      url: "https://linkedin.com/in/matthias-kalms",
    },
  ],
  [
    "github",
    {
      title: "GitHub",
      url: "https://github.com/mtkalms",
    },
  ],
]);

function App() {
  const popoverRef = useRef<HTMLDivElement | null>(null);
  const [qrCodesOpen, setQrCodesOpen] = useDismissable(popoverRef);
  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 z-50 w-full border-b border-b-white/10 text-white">
        <div className="-mb-[2px] backdrop-blur-xl">
          <div className="mx-auto flex max-w-screen-xl flex-wrap items-stretch justify-between px-16">
            <div className="flex flex-row gap-2">
              <button
                type="button"
                onClick={() => setQrCodesOpen((open) => !open)}
                className="transition-border flex flex-col items-center justify-center border-b-2 border-b-transparent stroke-white/65 p-0 px-2 py-3 transition-colors duration-300 hover:border-b-white hover:stroke-white"
              >
                <Qrcode
                  size={25}
                  className="stroke-inherit"
                  title="Toggle QR popover"
                />
              </button>
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
              <ThemeModeToggle className="transition-border flex flex-col items-center border-b-2 border-b-transparent stroke-white/65 px-2 py-3 transition-colors duration-300 hover:border-b-white hover:stroke-white" />
            </div>
          </div>
        </div>
        <div className="h-px w-full backdrop-blur-2xl" />
        <div className="h-px w-full backdrop-blur-3xl" />
        {qrCodesOpen && (
          <div className="mx-auto max-w-screen-xl">
            <div className="relative mx-16">
              <QrPopover
                codes={socialLinks}
                ref={popoverRef}
                className="rounded-2xl border border-white/10 p-2 text-white shadow-2xl backdrop-blur-xl"
              />
            </div>
          </div>
        )}
      </nav>
      {/* Main content */}
      <main>
        {/* Hero Section */}
        <Panorama />
        {/* Sections */}
        <div className="mt-[100vh] min-h-auto px-8 py-2">
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
            <SocialBadge
              type="Linkedin"
              href={socialLinks.get("linkedin")?.url || ""}
            />
            <SocialBadge
              type="Github"
              href={socialLinks.get("github")?.url || ""}
            />
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
