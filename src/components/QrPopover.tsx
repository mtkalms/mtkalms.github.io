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

interface QrCodeEntry {
  title: string;
  url: string;
}

interface QrPopoverProps extends DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> {
  codes?: Map<string, QrCodeEntry>;
  size?: number;
}

function QrPopover({
  size = 25,
  codes = new Map<string, QrCodeEntry>(),
  className = "",
  ...props
}: QrPopoverProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<string>(
    codes.keys().next().value || "",
  );
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

  const activeEntry = codes.get(activeTab);

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
          title={`Toggle QR popover (${activeEntry?.title})`}
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
          className="fixed top-[4.25rem] left-1/2 z-[60] w-[calc(100vw-1rem)] max-w-[36rem] -translate-x-1/2 rounded-2xl border border-white/15 bg-white/10 p-3 text-white shadow-2xl backdrop-blur-xl md:absolute md:top-full md:right-0 md:left-auto md:mt-2 md:w-[22rem] md:max-w-[22rem] md:translate-x-0 dark:bg-white/5"
        >
          <div
            className="mb-3 grid grid-cols-2 rounded-xl border border-white/10 bg-black/20 p-1"
            role="tablist"
            aria-label="Social QR tabs"
          >
            {Array.from(codes?.entries() || []).map(([id, entry]) => (
              <button
                type="button"
                role="tab"
                aria-selected={activeTab === id}
                className={`rounded-lg px-3 py-1.5 text-sm transition-colors ${
                  activeTab === id
                    ? "bg-white/20 text-white"
                    : "text-white/70 hover:text-white"
                }`}
                onClick={() => setActiveTab(id)}
              >
                {entry.title}
              </button>
            ))}
          </div>
          <div className="flex flex-col items-center gap-3 rounded-xl border border-white/10 bg-black/20 p-4">
            <QRCodeSVG
              value={activeEntry?.url || ""}
              size={200}
              bgColor="transparent"
              fgColor="currentColor"
              className="text-white"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default QrPopover;
export type { QrPopoverProps, QrCodeEntry };
