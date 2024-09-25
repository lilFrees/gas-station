import { ReactElement, useState } from "react";

interface ResizablePanelProps {
  TopContent: () => ReactElement | null;
  BottomContent: () => ReactElement | null;
}

function ResizablePanel({ TopContent, BottomContent }: ResizablePanelProps) {
  const [slidePos, setSlidePos] = useState(75);

  const handleMove = (event: MouseEvent) => {
    const slider = document.getElementById("slider") as HTMLDivElement;
    if (!slider) return;
    const rect = slider.getBoundingClientRect();

    const y = Math.max(0, Math.min(event.clientY - rect.top, rect.height));

    const percent = Math.max(0, Math.min((y / rect.height) * 100, 100));
    setSlidePos(percent);
  };

  const handleMouseDown = () => {
    document.addEventListener("mousemove", handleMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  const handleMouseUp = () => {
    document.removeEventListener("mousemove", handleMove);
    document.removeEventListener("mouseup", handleMouseUp);
  };

  return (
    <div className="relative size-full" id="slider">
      <div className="relative h-full overflow-hidden">
        <div
          className="overflow-hidden"
          style={{
            height: `${slidePos}%`,
          }}
        >
          <TopContent />
        </div>
        <div
          className="overflow-hidden"
          style={{
            height: `${100 - slidePos}%`,
          }}
        >
          <BottomContent />
        </div>
        <div
          className="absolute inset-x-0 mx-auto h-2 w-full max-w-6xl cursor-ns-resize rounded-full bg-slate-300 px-2"
          style={{
            top: `calc(${slidePos}% - 1px)`,
          }}
          onMouseDown={handleMouseDown}
        >
          <div className="absolute left-1/2 top-0 -translate-x-1/2 rounded-full bg-white"></div>
        </div>
      </div>
    </div>
  );
}

export default ResizablePanel;
