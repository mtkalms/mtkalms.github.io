import "./Panorama.css";

function Panorama() {
  return (
    <div className="panorama">
      <div className="panorama-layer layer-5">
        <svg viewBox="0 0 1200 400" preserveAspectRatio="xMidYMax slice">
          <path d="M0,400 L0,200 Q200,150 400,180 T800,160 L1200,140 L1200,400 Z" />
        </svg>
      </div>
      <div className="panorama-layer layer-4">
        <svg viewBox="0 0 1200 400" preserveAspectRatio="xMidYMax slice">
          <path d="M0,400 L0,220 Q150,180 300,200 Q450,220 600,190 Q750,160 900,185 Q1050,210 1200,180 L1200,400 Z" />
        </svg>
      </div>
      <div className="panorama-layer layer-3">
        <svg viewBox="0 0 1200 400" preserveAspectRatio="xMidYMax slice">
          <path d="M0,400 L0,250 L200,280 L400,240 L600,270 L800,230 L1000,260 L1200,220 L1200,400 Z" />
          <polygon points="100,280 110,220 120,280" />
          <polygon points="300,260 310,200 320,260" />
          <polygon points="500,290 510,230 520,290" />
          <polygon points="700,250 710,190 720,250" />
          <polygon points="900,280 910,220 920,280" />
          <polygon points="1100,240 1110,180 1120,240" />
        </svg>
      </div>
      <div className="panorama-layer layer-2">
        <svg viewBox="0 0 1200 400" preserveAspectRatio="xMidYMax slice">
          <path d="M0,400 L0,280 L150,300 L300,260 L450,290 L600,250 L750,280 L900,240 L1050,270 L1200,250 L1200,400 Z" />
          <polygon points="80,310 90,240 100,310" />
          <polygon points="220,280 230,210 240,280" />
          <polygon points="380,310 390,240 400,310" />
          <polygon points="540,270 550,200 560,270" />
          <polygon points="680,300 690,230 700,300" />
          <polygon points="840,260 850,190 860,260" />
          <polygon points="980,290 990,220 1000,290" />
          <polygon points="1120,270 1130,200 1140,270" />
        </svg>
      </div>
      <div className="panorama-layer layer-1">
        <svg viewBox="0 0 1200 400" preserveAspectRatio="xMidYMax slice">
          <path d="M0,400 L0,320 L100,340 L200,310 L300,335 L400,305 L500,330 L600,300 L700,325 L800,295 L900,320 L1000,290 L1100,315 L1200,285 L1200,400 Z" />
          <polygon points="50,350 60,270 70,350" />
          <polygon points="150,330 160,250 170,330" />
          <polygon points="250,345 260,265 270,345" />
          <polygon points="350,320 360,240 370,320" />
          <polygon points="450,345 460,265 470,345" />
          <polygon points="550,315 560,235 570,315" />
          <polygon points="650,340 660,260 670,340" />
          <polygon points="750,310 760,230 770,310" />
          <polygon points="850,335 860,255 870,335" />
          <polygon points="950,305 960,225 970,305" />
          <polygon points="1050,330 1060,250 1070,330" />
          <polygon points="1150,300 1160,220 1170,300" />
        </svg>
      </div>
      <div className="panorama-layer layer-0">
        <svg viewBox="0 0 1200 400" preserveAspectRatio="xMidYMax slice">
          <path d="M0,400 L0,350 L80,365 L160,340 L240,360 L320,335 L400,355 L480,330 L560,350 L640,325 L720,345 L800,320 L880,340 L960,315 L1040,335 L1120,310 L1200,330 L1200,400 Z" />
          <polygon points="40,370 50,285 60,370" />
          <polygon points="120,355 130,270 140,355" />
          <polygon points="200,365 210,280 220,365" />
          <polygon points="280,350 290,265 300,350" />
          <polygon points="360,365 370,280 380,365" />
          <polygon points="440,345 450,260 460,345" />
          <polygon points="520,360 530,275 540,360" />
          <polygon points="600,340 610,255 620,340" />
          <polygon points="680,355 690,270 700,355" />
          <polygon points="760,335 770,250 780,335" />
          <polygon points="840,350 850,265 860,350" />
          <polygon points="920,330 930,245 940,330" />
          <polygon points="1000,345 1010,260 1020,345" />
          <polygon points="1080,325 1090,240 1100,325" />
          <polygon points="1160,340 1170,255 1180,340" />
        </svg>
      </div>
    </div>
  );
}

export default Panorama;
