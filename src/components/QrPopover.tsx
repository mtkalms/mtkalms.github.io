import {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  useEffect,
  useId,
  useRef,
  useState,
} from "react";
import { QRCodeSVG } from "qrcode.react";
import { TbQrcode as Qrcode } from "react-icons/tb";

type QrTab = "linkedin" | "github";

interface QrPopoverProps extends DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> {
  githubUrl: string;
  linkedinUrl: string;
  size?: number;
}

function QrPopover({
  size = 25,
  githubUrl,
  linkedinUrl,
  className = "",
  ...props
}: QrPopoverProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<QrTab>("linkedin");
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const popoverRef = useRef<HTMLDivElement | null>(null);
  const popoverId = useId();

  useEffect(() => {
    if (!isOpen) return;

    function handlePointerDown(event: MouseEvent | TouchEvent) {
      const target = event.target as Node | null;
      if (!target) return;
      if (
        popoverRef.current?.contains(target) ||
        buttonRef.current?.contains(target)
      )
        return;
      setIsOpen(false);
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setIsOpen(false);
    }

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("touchstart", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("touchstart", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const activeLabel = activeTab === "linkedin" ? "LinkedIn" : "GitHub";
  const activeUrl = activeTab === "linkedin" ? linkedinUrl : githubUrl;

  return (
    <div className="relative flex">
      <button
        ref={buttonRef}
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        aria-expanded={isOpen}
        aria-controls={popoverId}
        aria-haspopup="dialog"
        {...props}
        className={className}
      >
        <Qrcode
          size={size}
          className="stroke-inherit"
          title={`Toggle QR popover (${activeLabel})`}
          width={size}
          height={size}
          suppressHydrationWarning
        />
      </button>
      {isOpen && (
        <div
          id={popoverId}
          ref={popoverRef}
          role="dialog"
          aria-label="Social QR codes"
          className="fixed top-[4.25rem] left-1/2 z-[60] w-[calc(100vw-1rem)] max-w-[36rem] -translate-x-1/2 rounded-2xl border border-white/15 bg-white/10 p-3 text-white shadow-2xl backdrop-blur-xl dark:bg-white/5 md:absolute md:top-full md:right-0 md:left-auto md:mt-2 md:w-[22rem] md:max-w-[22rem] md:translate-x-0"
        >
          <div
            className="mb-3 grid grid-cols-2 rounded-xl border border-white/10 bg-black/20 p-1"
            role="tablist"
            aria-label="Social QR tabs"
          >
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === "linkedin"}
              className={`rounded-lg px-3 py-1.5 text-sm transition-colors ${
                activeTab === "linkedin"
                  ? "bg-white/20 text-white"
                  : "text-white/70 hover:text-white"
              }`}
              onClick={() => setActiveTab("linkedin")}
            >
              LinkedIn
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === "github"}
              className={`rounded-lg px-3 py-1.5 text-sm transition-colors ${
                activeTab === "github"
                  ? "bg-white/20 text-white"
                  : "text-white/70 hover:text-white"
              }`}
              onClick={() => setActiveTab("github")}
            >
              GitHub
            </button>
          </div>
          <div className="flex flex-col items-center gap-3 rounded-xl border border-white/10 bg-black/20 p-4">
            <QRCodeSVG
              value={activeUrl}
              size={200}
              includeMargin
              bgColor="transparent"
              fgColor="currentColor"
              className="text-white"
            />
            <a
              href={activeUrl}
              target="_blank"
              rel="noreferrer"
              className="max-w-full truncate text-sm text-white/85 underline decoration-white/40 underline-offset-4 hover:text-white"
            >
              {activeUrl}
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default QrPopover;
export type { QrPopoverProps };
