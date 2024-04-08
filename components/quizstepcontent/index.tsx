import { Button, Container, Flex, Title } from "@mantine/core";
import { useRandomInsert } from "../../CustomHooks";
import { useEffect } from "react";
import { letterArray } from "../../helper/letterstorage";

interface QuizStepContentProps {
  quiz: Questions;
}

export const QuizStepContent: React.FC<QuizStepContentProps> = (quiz) => {
  const [insertRandomly, array] = useRandomInsert(quiz.quiz.incorrectAnswers);
  useEffect(() => insertRandomly(quiz.quiz.correctAnswer), []);

  return (
    <Flex mt="3rem" justify="center" align="center" direction="column">
      <Title c="gray.9">{quiz.quiz.question.text}</Title>
      <Flex direction="column" mt="lg" gap="2rem" w="100%" align="center">
        {array.map((answer, key) => (
          <Button
            key={key}
            leftSection={letterArray[key]}
            variant="default"
            h="3rem"
            w="50%"
          >
            {answer}
          </Button>
        ))}
      </Flex>
    </Flex>
  );
};
