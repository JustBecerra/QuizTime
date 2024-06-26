import { Center, RingProgress, Text } from "@mantine/core";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";

interface props {
  active: number;
  answerChosen: boolean;
}

export const Timer = (props: props) => {
  const [time, setTime] = useState(30);
  const [color, setColor] = useState("green");
  const { active, answerChosen } = props;
  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => {
        if (!answerChosen) {
          if (prevTime <= 0) {
            clearInterval(interval);
            if (time === 0) redirect("/");
            return 0;
          }
          return prevTime - 1;
        }
        return prevTime;
      });

      if (time < 20) setColor("yellow");
      if (time < 10) setColor("red");
    }, 1000);

    return () => clearInterval(interval);
  }, [answerChosen, time]);

  useEffect(() => {
    setTime(30);
    setColor("green");
  }, [active]);
  return (
    <Center>
      <RingProgress
        size={120}
        visibleFrom="sm"
        label={
          <Text size="lg" ta="center">
            {time}
          </Text>
        }
        roundCaps
        sections={[{ value: (time / 30) * 100, color: color }]}
      />
      <RingProgress
        size={80}
        label={
          <Text size="xs" ta="center">
            {time}
          </Text>
        }
        roundCaps
        hiddenFrom="sm"
        sections={[{ value: (time / 30) * 100, color: color }]}
      />
    </Center>
  );
};
