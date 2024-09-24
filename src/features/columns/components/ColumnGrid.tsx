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

const cards = getCards(15);

function ColumnGrid() {
  const { width } = useScreenSize();
  const [scale, setScale] = useState<number>(1);

  useEffect(() => {
    function getScaleValue() {
      if (width > 1200) {
        setScale(1);
      } else if (width <= 1200) {
        setScale(width / 1200);
      }
    }

    getScaleValue();
  }, [width]);

  const numCards = cards.length;
  const rows = Math.min(3, Math.ceil(numCards / 6));
  const columns = numCards <= 6 ? numCards : Math.ceil(numCards / rows);

  return (
    <div className="mb-10 flex h-full min-h-0 flex-col">
      <div
        className="grid max-h-min grow gap-[1vw]"
        style={{
          transform: `scale(${scale})`,
          transformOrigin: "top left",
          width: `${100 / scale}%`,
          gridTemplateColumns: `repeat(${columns},1fr)`,
          gridTemplateRows: `repeat(${rows},minmax(0,min-content))`,
          minHeight: 0,
        }}
      >
        {...cards}
      </div>
    </div>
  );
}

export default ColumnGrid;
