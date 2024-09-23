import { ReactNode, useEffect, useState } from "react";
import { useScreenSize } from "../../../shared/hooks/useScreenSize";
import ColumnCard from "./ColumnCard";

function getCards(target: number) {
  const result: ReactNode[] = [];

  for (let i = 0; i < target; i++) {
    result.push(<ColumnCard key={i} id={i} />);
  }

  return result;
}

const cards = getCards(25);

function ColumnGrid() {
  const { width } = useScreenSize();
  const [scale, setScale] = useState<number>(0);

  useEffect(() => {
    function getScaleValue() {
      if (width > 0) {
        if (width <= 1024) {
          setScale(width / 1000);
        } else {
          setScale(1);
        }
      }
    }

    getScaleValue();
  }, [width]);

  return (
    <div className="flex h-full flex-col">
      <div
        className="grid h-full grow grid-rows-3 gap-[1vw]"
        style={{
          transform: `scale(${scale})`,
          transformOrigin: "top left",
          width: `${100 / scale}%`,
          gridTemplateColumns: `repeat(${Math.ceil(cards.length / 3)},1fr)`,
          gridAutoRows: 0,
        }}
      >
        {...cards}
      </div>
    </div>
  );
}

export default ColumnGrid;
