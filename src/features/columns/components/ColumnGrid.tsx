import { ReactNode, useEffect, useState } from "react";
import { useScreenSize } from "../../../shared/hooks/useScreenSize";
import ColumnCard from "./ColumnCard";
import ColumnNavigation from "./ColumnNavigation";

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
  const itemsPerRow = columns;

  const containerStyle = {
    transform: `scale(${scale})`,
    transformOrigin: "top left",
    width: `${100 / scale}%`,
  };

  const cardStyle = {
    flex: `1 0 calc(${100 / itemsPerRow}% - 1vw)`,
    maxWidth: `calc(${100 / itemsPerRow}% - 1vw)`,
  };

  const createRows = () => {
    const rows = [];
    for (let i = 0; i < numCards; i += itemsPerRow) {
      const rowCards = cards.slice(i, i + itemsPerRow);
      rows.push(
        <div
          key={i}
          className="mb-[1vw] flex min-h-0 shrink basis-1/3 items-center justify-between gap-[1vw]"
        >
          {rowCards.map((card, index) => (
            <div key={index} style={cardStyle}>
              {card}
            </div>
          ))}
          {rowCards.length < itemsPerRow &&
            Array(itemsPerRow - rowCards.length)
              .fill(null)
              .map((_, index) => (
                <div key={`empty-${index}`} style={cardStyle} />
              ))}
        </div>,
      );
    }
    return rows;
  };

  return (
    <div className="mx-auto w-full max-w-6xl px-2">
      <h1 className="mb-5 text-2xl font-bold">Колонки</h1>
      <div className="overflow-hidden" style={containerStyle}>
        {createRows()}
      </div>
    </div>
  );
}

export default ColumnGrid;
