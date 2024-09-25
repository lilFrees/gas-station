import React, { ReactNode, useEffect, useState } from "react";
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
  const itemsPerRow = columns;

  const containerStyle = {
    transform: `scale(${scale})`,
    transformOrigin: "top left",
    width: `${100 / scale}%`,
  };

  const rowStyle = {
    display: "flex",
    gap: "1vw",
    marginBottom: "1vw",
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
        <div key={i} style={rowStyle}>
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
    <div className="h-fit border-4 border-orange-500" style={containerStyle}>
      {createRows()}
    </div>
  );
}

export default ColumnGrid;
