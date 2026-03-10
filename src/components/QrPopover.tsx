import { useState } from "react";
import { QRCodeSVG } from "qrcode.react";

interface QrCodeEntry {
  title: string;
  url: string;
}

interface QrPopoverProps {
  codes?: Map<string, QrCodeEntry>;
  ref?: React.Ref<HTMLDivElement>;
  size?: number;
  className?: string;
}

function QrPopover({
  codes = new Map<string, QrCodeEntry>(),
  ref,
  className,
}: QrPopoverProps) {
  const [activeTab, setActiveTab] = useState<string>(
    codes.keys().next().value || "",
  );

  return (
    <div
      ref={ref}
      role="dialog"
      aria-label="Social QR codes"
      className={`md:max-sm: absolute top-2 right-1/2 z-60 w-[calc(100vw-2rem)] max-w-sm translate-x-1/2 overflow-hidden md:right-auto md:left-0 md:w-2xs md:translate-x-0 ${className}`}
    >
      <div className="backdrop-blur-xl">
        <div className="z-auto flex flex-col">
          <div className="-mb-[1.5px] grid grid-cols-2 backdrop-blur-2xl">
            {Array.from(codes?.entries() || []).map(([id, entry]) => (
              <button
                key={id}
                type="button"
                role="tab"
                className={`border-b border-b-transparent p-0 px-3 py-1.5 text-white/65 transition-colors duration-300 hover:text-white ${activeTab === id ? "border-b-white !text-white" : ""}`}
                onClick={() => setActiveTab(id)}
              >
                {entry.title}
              </button>
            ))}
          </div>
        </div>
        <div className="h-[2px] backdrop-blur-3xl"></div>
        <QRCodeSVG
          value={codes.get(activeTab)?.url || ""}
          bgColor="transparent"
          fgColor="currentColor"
          className="size-full p-4 text-white"
        />
      </div>
    </div>
  );
}

export default QrPopover;
export type { QrPopoverProps, QrCodeEntry };
