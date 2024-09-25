import { ReactNode, useEffect, useState } from "react";
import { useScreenSize } from "../../../shared/hooks/useScreenSize";
import ColumnCard from "./ColumnCard";
import { Flex } from "antd";

function getCards(target: number) {
  const result: ReactNode[] = [];

  for (let i = 0; i < target; i++) {
    result.push(<ColumnCard key={i} id={i} />);
  }

  return result;
}

const cards = getCards(16);

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
    height: `${100 / scale}%`,
    // paddingBottom: `${100 / scale}%`,
    flexShrink: 1, // Allow the flex container to shrink
    overflow: "hidden",
  };

  const cardStyle = {
    flex: `1 0 calc(${100 / itemsPerRow}% - 1vw)`,
    maxWidth: `calc(${100 / itemsPerRow}% - 1vw)`,
  };

  const renderRow = (startIndex: number, rowIndex: number) => {
    const rowCards = cards.slice(startIndex, startIndex + itemsPerRow);
    return (
      <Flex className="mb-[1vw] h-full max-h-min min-h-0 items-start gap-[1vw] overflow-hidden">
        {rowCards.map((card, index) => (
          <div key={index} style={cardStyle} className="size-full">
            {card}
          </div>
        ))}
        {rowCards.length < itemsPerRow &&
          Array(itemsPerRow - rowCards.length)
            .fill(null)
            .map((_, index) => (
              <div key={`empty-${rowIndex}-${index}`} style={cardStyle} />
            ))}
      </Flex>
    );
  };

  return (
    <div className="mx-auto h-full w-full max-w-6xl px-2">
      <h1 className="grow text-2xl font-bold">Колонки</h1>
      <Flex
        vertical
        style={containerStyle}
        className="max-h-min overflow-hidden"
      >
        {Array.from({ length: rows }).map((_, rowIndex) =>
          renderRow(rowIndex * itemsPerRow, rowIndex),
        )}
      </Flex>
    </div>
  );
}

export default ColumnGrid;
