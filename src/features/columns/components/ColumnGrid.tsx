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

  const numCards = cards.length;
  const rows = Math.min(3, Math.ceil(numCards / 6));
  const columns = numCards <= 6 ? numCards : Math.ceil(numCards / rows);

  return (
    <div className="flex h-full flex-col">
      <div
        className="grid h-full grow grid-rows-3 gap-[1vw]"
        style={{
          transform: `scale(${scale})`,
          transformOrigin: "top left",
          width: `${100 / scale}%`,
          gridTemplateColumns: `repeat(${columns},1fr)`,
          gridTemplateRows: `repeat(${rows},1fr)`,
        }}
      >
        {...cards}
      </div>
    </div>
  );
}

export default ColumnGrid;
