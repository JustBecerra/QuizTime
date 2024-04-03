"use client";
import {
  Button,
  Container,
  Flex,
  Title,
  List,
  rem,
  Center,
} from "@mantine/core";
import {
  IconBarbell,
  IconClockHour5,
  IconHelpOctagonFilled,
} from "@tabler/icons-react";

export const Maininfocard = () => {
  const questionIcon = (
    <IconHelpOctagonFilled style={{ width: rem(16), height: rem(16) }} />
  );
  const timeIcon = (
    <IconClockHour5 style={{ width: rem(16), height: rem(16) }} />
  );
  const difficultyIcon = (
    <IconBarbell style={{ width: rem(16), height: rem(16) }} />
  );
  return (
    <Container
      bg="gray.0"
      w="100%"
      h="80vh"
      py={60}
      style={{
        borderRadius: "2.5rem",
      }}
    >
      <Flex direction="column" justify="space-evenly" h="80%">
        <Title order={1} c="deepBlue.4" fs="italic">
          Test your knowledge
        </Title>
        <List size="lg" withPadding>
          <List.Item icon={questionIcon} c="gray.9">
            10 questions
          </List.Item>
          <List.Item icon={timeIcon} c="gray.9">
            30 seconds per question
          </List.Item>
          <List.Item icon={difficultyIcon} c="gray.9">
            questions vary on difficulty
          </List.Item>
        </List>
        <Button>Start Quiz</Button>
      </Flex>
    </Container>
  );
};
