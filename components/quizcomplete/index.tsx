import { Button, Flex, Text } from "@mantine/core";
import Link from "next/link";
import { Dispatch, SetStateAction, useState } from "react";

interface props {
  setActive: Dispatch<SetStateAction<number>>;
}

export const QuizComplete = (props: props) => {
  const { setActive } = props;
  const [degrees, setDegrees] = useState(0);
  let intervalId: NodeJS.Timeout;
  const handleMouseOver = () => {
    intervalId = setInterval(() => {
      setDegrees((degrees) => degrees + 1);
    }, 10);
  };

  const handleMouseOut = () => {
    clearInterval(intervalId);
    setDegrees(0);
  };
  return (
    <Flex
      direction="column"
      m="auto"
      h="16rem"
      w="16rem"
      justify="flex-end"
      gap="lg"
    >
      <Text c="gray.9">
        Quiz done! click on the home button or try again if you feel like it.
      </Text>
      <Text c="gray.9">7/10 placeholder</Text>
      <Flex gap="lg">
        <Link href={"/"}>
          <Button>Home</Button>
        </Link>
        <Button
          variant="gradient"
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          onClick={() => setActive(0)}
          gradient={{ from: "pink", to: "cyan", deg: degrees }}
        >
          Play again
        </Button>
      </Flex>
    </Flex>
  );
};
