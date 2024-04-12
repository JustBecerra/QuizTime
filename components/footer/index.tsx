import { Flex, Text } from "@mantine/core";
import Link from "next/link";

export const Footer = () => {
  return (
    <Flex
      align="center"
      direction={{ base: "column", md: "row" }}
      my="1rem"
      gap="1rem"
    >
      <Flex gap="xs" align="center">
        <Text c="gray.0" ta="center">
          Data provided by{" "}
        </Text>
        <Link href="https://the-trivia-api.com" target="_blank">
          <Text c="pink" size="lg" ta="center" td="underline" fw={700}>
            The Trivia API
          </Text>
        </Link>
      </Flex>
    </Flex>
  );
};
