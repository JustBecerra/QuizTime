import { Button, Container, Title } from "@mantine/core";
import { IconLetterA } from "@tabler/icons-react";

export const QuizStepContent = () => {
  return (
    <Container>
      <Title>When did Napoleon die?</Title>
      <Button leftSection={<IconLetterA size={14} />} variant="default">
        Gallery
      </Button>
    </Container>
  );
};
