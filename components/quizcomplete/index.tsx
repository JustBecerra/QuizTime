import { Button, Flex, Text } from "@mantine/core";
import Link from "next/link";
import { Dispatch, SetStateAction, useContext, useState } from "react";
import QuizContext, { answersType } from "../../context/QuizProvider";

interface props {
  setActive: Dispatch<SetStateAction<number>>;
  quizData: Questions[];
  answerResults: answersType[];
}

export const QuizComplete = (props: props) => {
  const { answerResults, quizData } = props;
  const [degrees, setDegrees] = useState(0);
  const { handlePlayAgain } = useContext(QuizContext);
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
  const results = answerResults.filter((res) => res.result).length;
  const resultText = () => {
    if (results === 10) {
      return "Perfect score! I wonder if you can get it again.";
    } else if (results >= 6 && results < 10) {
      return "You missed some but you did alright!";
    } else {
      return `You should keep practicing, you'll get the hang of it.`;
    }
  };
  const resultNumberColor = () => {
    if (results === 10) {
      return "green";
    } else if (results >= 6 && results < 10) {
      return "yellow.0";
    } else {
      return "red.0";
    }
  };

  return (
    <Flex direction="column" h="16rem" w="16rem" gap="xl" align="center" justify="center">
      {quizData.length > 0 ? (
        <Flex w="100%" h="50%">
          <Text w="100%" span c={resultNumberColor()} fw={600} size="1.5rem">
            The server is loading, give it a second or two.
          </Text>
        </Flex>
      ) : (
        <>
          <Text c={resultNumberColor()} fw={700} size="4rem">
            {results}/10
          </Text>
          <Text c="gray.9" fs="italic" ta="center">
            {resultText()}
          </Text>
        </>
      )}

      <Flex gap="lg">
        <Link href={"/"}>
          <Button>Home</Button>
        </Link>
        <Button
          variant="gradient"
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          onClick={handlePlayAgain}
          gradient={{ from: "pink", to: "cyan", deg: degrees }}
        >
          Play again
        </Button>
      </Flex>
    </Flex>
  );
};
