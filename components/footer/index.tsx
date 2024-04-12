import { Flex, Text } from "@mantine/core";
import Image from "next/image";
import devgif from "../../public/programmergif.gif";
export const Footer = () => {
  return (
    <Flex
      align="center"
      direction={{ base: "column", md: "row" }}
      mb="1rem"
      gap="1rem"
    >
      <Image src={devgif} width={100} height={100} alt={""} />
      <Flex direction="column" align="center" justify="center">
        <Text c="gray.0">Developed by an awesome developer</Text>
        <Flex gap="xs" justify="center" align="center">
          <Text c="gray.0">Data provided by </Text>
          <Text c="pink" size="lg" td="underline" fw={700}>
            The Trivia API
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};
