import { useState } from "react";

export function useRandomInsert(
  initialArray: string[]
): [(item: string) => void, string[]] {
  const [array, setArray] = useState<string[]>(initialArray);

  const insertRandomly = (item: string): void => {
    const randomIndex = Math.floor(Math.random() * (array.length + 1));
    const newArray = [
      ...array.slice(0, randomIndex),
      item,
      ...array.slice(randomIndex),
    ];
    setArray(newArray);
  };

  return [insertRandomly, array];
}
