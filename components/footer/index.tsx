import { Flex, Text } from "@mantine/core";
import Image from "next/image";
import devgif from "../../public/programmergif.gif";
export const Footer = () => {
  return (
    <Flex
      align="center"
      direction="column"
      style={{ gap: "1rem", marginBottom: "1rem" }}
    >
      <Text c="gray.0">Developed by an awesome developer</Text>
      <Image src={devgif} width={100} height={100} alt={""} />
    </Flex>
  );
};
