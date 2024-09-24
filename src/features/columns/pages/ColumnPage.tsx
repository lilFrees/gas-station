import { useEffect, useRef, useState } from "react";
import "react-resizable/css/styles.css";
import { useNavigate } from "react-router-dom";
import { useScreenSize } from "../../../shared/hooks/useScreenSize";
import { useAuth } from "../../auth/hooks/useAuth";
import ColumnGrid from "../components/ColumnGrid";
import ColumnNavigation from "../components/ColumnNavigation";

function ColumnPage() {
  const [bottomHeight, setBottomHeight] = useState<number>(300);
  const navigate = useNavigate();
  const { user } = useAuth();
  const { height: screenHeight } = useScreenSize();
  const bottomContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  const topContainerHeight = Math.max(0, screenHeight - bottomHeight - 57);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    const startY = e.clientY;
    const startHeight = bottomHeight;

    const handleMouseMove = (e: MouseEvent) => {
      const deltaY = startY - e.clientY;
      const newHeight = Math.max(
        20,
        Math.min(startHeight + deltaY, screenHeight - 57),
      );
      setBottomHeight(newHeight);
    };

    const handleMouseUp = () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  return (
    <div className="flex h-screen flex-col overflow-hidden bg-slate-50">
      <ColumnNavigation />
      <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-2">
        <div
          className="shrink overflow-hidden"
          style={{
            height: topContainerHeight,
          }}
        >
          <h1 className="text-2xl font-semibold">Колонки</h1>
          <div className="h-full">
            <ColumnGrid />
          </div>
        </div>
        <div
          ref={bottomContainerRef}
          className="relative mt-auto"
          style={{ height: bottomHeight }}
        >
          <div
            className="absolute left-0 right-0 top-0 flex h-3 cursor-ns-resize items-center justify-center rounded-md bg-gray-200"
            onMouseDown={handleMouseDown}
          >
            <div className="h-4 w-4 rounded-full bg-slate-300"></div>
          </div>
          <div className="h-full overflow-auto bg-white p-4 pt-6">
            <div className="text-3xl">Heading</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ColumnPage;
