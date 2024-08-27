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
    const randomIndex = Math.floor(Math.random() * (quiz.incorrectAnswers.length + 1));
    const newArray = [...quiz.incorrectAnswers.slice(0, randomIndex), quiz.correctAnswer, ...quiz.incorrectAnswers.slice(randomIndex)];
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
      } else if (answer !== quiz.correctAnswer && index === updatedResults[index].id) {
        updatedResults[index].result = false;
      }
      return updatedResults;
    });
  };

  return (
    <Flex justify="center" w="100%" h="100%" align="center" direction="column" gap="2rem">
      <Flex justify="center" align="center" direction="column">
        <Title c="gray.9" size="1.5rem" visibleFrom="md" mx="md">
          {typeof quiz.question === "string" ? quiz.question : quiz.question.text}
        </Title>
        {quiz.question && (
          <Text c="gray.9" visibleFrom="md" size="1rem">
            User submitted question
          </Text>
        )}
      </Flex>
      <Flex>
        <Title c="gray.9" size="1rem" hiddenFrom="md" mx="md">
          {typeof quiz.question === "string" ? quiz.question : quiz.question.text}
        </Title>
        {quiz.question && (
          <Text c="gray.9" hiddenFrom="md" size="0.5rem">
            User submitted question
          </Text>
        )}
      </Flex>

      <Flex direction="column" gap="2rem" w="100%" align="center">
        {answers.map((answer, index) => (
          <Button
            key={index}
            leftSection={letterArray[index]}
            variant="filled"
            color={colorSelection(answer)}
            h={{ base: "5rem", md: "4rem" }}
            w={{ base: "90%", md: "60%" }}
            onClick={() => CheckAnswer(answer)}
          >
            <Text size="1rem" visibleFrom="md" truncate="end" style={{ whiteSpace: "pre-wrap", wordWrap: "break-word", lineHeight: "1.25rem" }}>
              {answer}
            </Text>
            <Text size="0.75rem" truncate="end" hiddenFrom="md" style={{ whiteSpace: "pre-wrap", wordWrap: "break-word", lineHeight: "1rem" }}>
              {answer}
            </Text>
          </Button>
        ))}
      </Flex>
      <Button disabled={!answerChosen} onClick={nextQuestion} mb="1rem">
        Next
      </Button>
    </Flex>
  );
};
