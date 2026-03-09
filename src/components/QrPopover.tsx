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
      className={`absolute top-2 right-1/2 z-60 w-[calc(100vw-2rem)] max-w-[36rem] translate-x-1/2 md:right-auto md:left-0 md:mt-2 md:w-[22rem] md:max-w-[22rem] md:translate-x-0 ${className}`}
    >
      <div
        className="mb-3 grid grid-cols-2 rounded-xl border border-white/10 bg-black/20 p-1"
        role="tablist"
        aria-label="Social QR tabs"
      >
        {Array.from(codes?.entries() || []).map(([id, entry]) => (
          <button
            key={id}
            type="button"
            role="tab"
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
          value={codes.get(activeTab)?.url || ""}
          size={200}
          bgColor="transparent"
          fgColor="currentColor"
          className="text-white"
        />
      </div>
    </div>
  );
}

export default QrPopover;
export type { QrPopoverProps, QrCodeEntry };
