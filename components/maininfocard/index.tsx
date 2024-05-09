"use client";
import {
  Button,
  Flex,
  Title,
  rem,
  Accordion,
  Text,
  Modal,
  TextInput,
} from "@mantine/core";
import {
  IconBarbell,
  IconClockHour5,
  IconHelpOctagon,
  IconHelpOctagonFilled,
} from "@tabler/icons-react";
import Link from "next/link";
import { useContext, useEffect } from "react";
import QuizContext from "../../context/QuizProvider";
import { useDisclosure } from "@mantine/hooks";
import { SubmitModal } from "../submitmodal";

export const Maininfocard = () => {
  const { handlePlayAgain } = useContext(QuizContext);
  const [opened, { open, close }] = useDisclosure(false);
  const questionIcon = (
    <IconHelpOctagonFilled
      style={{
        width: rem(24),
        height: rem(24),
        color: "var(--mantine-color-blue-6",
      }}
    />
  );
  const timeIcon = (
    <IconClockHour5
      style={{
        width: rem(24),
        height: rem(24),
        color: "var(--mantine-color-red-6",
      }}
    />
  );
  const difficultyIcon = (
    <IconBarbell
      style={{
        width: rem(24),
        height: rem(24),
        color: "var(--mantine-color-teal-6",
      }}
    />
  );
  useEffect(() => {
    handlePlayAgain();
  }, []);
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
        <Accordion w="60%" variant="contained" radius="lg">
          <Accordion.Item value="Questions">
            <Accordion.Control icon={questionIcon}>
              <Text>Questions</Text>
            </Accordion.Control>
            <Accordion.Panel>
              <Text size="sm">
                Contains 10 questions provided by the trivia API and users.
              </Text>
            </Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item value="Time">
            <Accordion.Control icon={timeIcon}>
              <Text>Time</Text>
            </Accordion.Control>
            <Accordion.Panel>
              <Text size="sm">
                You&apos;ve got 30 seconds to answer per question.
              </Text>
            </Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item value="Difficulty">
            <Accordion.Control icon={difficultyIcon}>
              <Text>Difficulty</Text>
            </Accordion.Control>
            <Accordion.Panel>
              <Text size="sm">Questions vary on difficulty and theme.</Text>
            </Accordion.Panel>
          </Accordion.Item>
        </Accordion>
        <Flex gap="lg">
          <Link href={"quiz"}>
            <Button
              styles={{
                root: {
                  boxShadow: "0px 0px 5px 2px #888888",
                },
              }}
            >
              Start Quiz
            </Button>
          </Link>
          <Button
            onClick={open}
            leftSection={<IconHelpOctagon size={20} />}
            color="green"
            styles={{
              root: {
                boxShadow: "0px 0px 5px 2px #888888",
              },
            }}
          >
            Submit Question
          </Button>
        </Flex>
        <SubmitModal opened={opened} close={close} />
      </Flex>
    </Flex>
  );
};
