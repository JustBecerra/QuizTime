"use client";
import { Button, Flex, Title, List, rem } from "@mantine/core";
import {
  IconBarbell,
  IconClockHour5,
  IconHelpOctagonFilled,
} from "@tabler/icons-react";
import { theme } from "../../theme";
import Link from "next/link";

export const Maininfocard = () => {
  const questionIcon = (
    <IconHelpOctagonFilled style={{ width: rem(24), height: rem(24) }} />
  );
  const timeIcon = (
    <IconClockHour5 style={{ width: rem(24), height: rem(24) }} />
  );
  const difficultyIcon = (
    <IconBarbell style={{ width: rem(24), height: rem(24) }} />
  );
  return (
    <Flex
      bg="gray.0"
      w={{ base: "90%", md: "30%" }}
      h="65vh"
      style={{
        borderRadius: "2.5rem",
      }}
    >
      <Flex
        direction="column"
        justify="center"
        h="auto"
        flex={1}
        align="center"
        gap="3rem"
      >
        <Title order={1} c="deepBlue.4" fs="italic">
          Test your knowledge
        </Title>
        <List
          center
          size="xl"
          withPadding
          style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
        >
          <List.Item icon={questionIcon} c="gray.9">
            10 questions
          </List.Item>
          <List.Item icon={timeIcon} c="gray.9">
            30 seconds per question
          </List.Item>
          <List.Item icon={difficultyIcon} c="gray.9">
            Questions vary on difficulty
          </List.Item>
        </List>
        <Link href={"quiz"}>
          <Button>Start Quiz</Button>
        </Link>
      </Flex>
    </Flex>
  );
};
