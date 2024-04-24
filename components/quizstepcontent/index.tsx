import { Button, Flex, Title, Text } from "@mantine/core";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { letterArray } from "../../helper/letterstorage";
import { useQuizContext } from "../../context/QuizProvider";

interface QuizStepContentProps {
  quiz: Questions;
  setActive: Dispatch<SetStateAction<number>>;
  answerChosen: boolean;
  setAnswerChosen: Dispatch<SetStateAction<boolean>>;
  index: number;
}

export const QuizStepContent: React.FC<QuizStepContentProps> = (props) => {
  const { quiz, setActive, answerChosen, setAnswerChosen, index } = props;
  const [answers, setAnswers] = useState<string[]>([]);
  const { setAnswerResults } = useQuizContext();

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

  const CheckAnswer = (answer: string) => {
    setAnswerChosen(true);
    setAnswerResults((prevResults) => {
      const updatedResults = [...prevResults];
      if (answer === quiz.correctAnswer && index === updatedResults[index].id) {
        updatedResults[index].result = true;
      } else if (
        answer !== quiz.correctAnswer &&
        index === updatedResults[index].id
      ) {
        updatedResults[index].result = false;
      }
      return updatedResults;
    });
  };

  return (
    <Flex justify="center" align="center" direction="column" gap="2rem">
      <Title c="gray.9" size="1.75rem" visibleFrom="md" mx="md">
        {quiz.question.text}
      </Title>
      <Title c="gray.9" size="1.25rem" hiddenFrom="md" mx="md">
        {quiz.question.text}
      </Title>
      <Flex direction="column" gap="2rem" w="100%" align="center">
        {answers.map((answer, index) => (
          <Button
            key={index}
            leftSection={letterArray[index]}
            variant="filled"
            color={colorSelection(answer)}
            h={{ base: "2rem", md: "4rem" }}
            w={{ base: "80%", md: "60%" }}
            onClick={() => CheckAnswer(answer)}
          >
            <Text
              size="1rem"
              style={{ whiteSpace: "pre-wrap", wordWrap: "break-word" }}
            >
              {answer}
            </Text>
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
