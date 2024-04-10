import { Center, RingProgress, Text } from "@mantine/core";
import { useEffect, useState } from "react";

export const Timer = () => {
  const [time, setTime] = useState(30);
  const [color, setColor] = useState("green");

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime <= 0) {
          clearInterval(interval);
          return 0;
        }
        return prevTime - 1;
      });
      if (time < 20) setColor("yellow");
      if (time < 10) setColor("red");
    }, 1000);

    return () => clearInterval(interval);
  }, [time]);
  return (
    <Center>
      <RingProgress
        label={
          <Text size="xs" ta="center">
            {/* Time left: {Math.trunc(time / 3)} */}
            Time left: {time}
          </Text>
        }
        roundCaps
        sections={[{ value: time, color: color }]}
      />
    </Center>
  );
};
