import { Button, Flex, Title } from "@mantine/core";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { letterArray } from "../../helper/letterstorage";

interface QuizStepContentProps {
  quiz: Questions;
  setActive: Dispatch<SetStateAction<number>>;
}

export const QuizStepContent: React.FC<QuizStepContentProps> = (props) => {
  const { quiz, setActive } = props;
  const [answers, setAnswers] = useState<string[]>([]);
  const [answerChosen, setAnswerChosen] = useState(false);

  useEffect(() => {
    const randomIndex = Math.floor(
      Math.random() * (quiz.incorrectAnswers.length + 1)
    );
    const newArray = [
      ...quiz.incorrectAnswers.slice(0, randomIndex),
      quiz.correctAnswer,
      ...quiz.incorrectAnswers.slice(randomIndex),
    ];
    setAnswers(newArray);
  }, [quiz.correctAnswer, quiz.incorrectAnswers]);

  const colorSelection = (answer: string) => {
    if (answer === quiz.correctAnswer && answerChosen) {
      return "green";
    } else if (answerChosen && answer !== quiz.correctAnswer) {
      return "red";
    } else {
      return "gray.9";
    }
  };

  const nextQuestion = () => {
    setActive((prev) => prev + 1);
    setAnswerChosen(false);
  };

  return (
    <Flex
      mt="3rem"
      justify="center"
      align="center"
      direction="column"
      gap="2rem"
    >
      <Title c="gray.9" size="1.75rem" visibleFrom="md" mx="md">
        {quiz.question.text}
      </Title>
      <Title c="gray.9" size="1.25rem" hiddenFrom="md" mx="md">
        {quiz.question.text}
      </Title>
      <Flex direction="column" mt="3rem" gap="2rem" w="100%" align="center">
        {answers.map((answer, key) => (
          <Button
            key={key}
            leftSection={letterArray[key]}
            variant="filled"
            color={colorSelection(answer)}
            h={{ base: "2rem", md: "3rem" }}
            w="50%"
            onClick={() => setAnswerChosen(true)}
          >
            {answer}
          </Button>
        ))}
      </Flex>
      {answerChosen && (
        <Button onClick={nextQuestion} mb="1rem">
          Next
        </Button>
      )}
    </Flex>
  );
};
