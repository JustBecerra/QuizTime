import { Button, Flex, Title } from "@mantine/core";

import { useEffect, useState } from "react";
import { letterArray } from "../../helper/letterstorage";

interface QuizStepContentProps {
  quiz: Questions;
}

export const QuizStepContent: React.FC<QuizStepContentProps> = (quiz) => {
  const [answers, setAnswers] = useState<string[]>([]);

  useEffect(() => {
    const randomIndex = Math.floor(
      Math.random() * (quiz.quiz.incorrectAnswers.length + 1)
    );
    const newArray = [
      ...quiz.quiz.incorrectAnswers.slice(0, randomIndex),
      quiz.quiz.correctAnswer,
      ...quiz.quiz.incorrectAnswers.slice(randomIndex),
    ];
    setAnswers(newArray);
  }, [quiz.quiz.correctAnswer, quiz.quiz.incorrectAnswers]);

  return (
    <Flex mt="3rem" justify="center" align="center" direction="column">
      <Title c="gray.9" size="2rem">
        {quiz.quiz.question.text}
      </Title>
      <Flex direction="column" mt="lg" gap="2rem" w="100%" align="center">
        {answers.map((answer, key) => (
          <Button
            key={key}
            leftSection={letterArray[key]}
            variant="default"
            h={{ base: "2rem", md: "3rem" }}
            w="50%"
          >
            {answer}
          </Button>
        ))}
      </Flex>
    </Flex>
  );
};
