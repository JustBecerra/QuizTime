import { Button, Container, Title } from "@mantine/core";
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
    <Container>
      <Title>{quiz.quiz.question.text}</Title>
      {array.map((answer, key) => (
        <Button key={key} leftSection={letterArray[key]} variant="default">
          {answer}
        </Button>
      ))}
    </Container>
  );
};
