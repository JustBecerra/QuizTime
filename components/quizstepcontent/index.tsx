import { Button, Container, Title } from "@mantine/core";
import { IconLetterA } from "@tabler/icons-react";

interface QuizStepContentProps {
  quiz: Questions;
}

export const QuizStepContent: React.FC<QuizStepContentProps> = (quiz) => {
  return (
    <Container>
      <Title>{quiz.quiz.question.Text}</Title>
      <Button leftSection={<IconLetterA size={14} />} variant="default">
        Gallery
      </Button>
    </Container>
  );
};
