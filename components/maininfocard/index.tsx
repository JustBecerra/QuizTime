"use client";
import { Button, Center, Flex, TextInput, rem } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
export const Maininfocard = () => {
  const searchIcon = <IconSearch style={{ width: rem(16), height: rem(16) }} />;
  return (
    <Flex
      bg="gray.0"
      w="100%"
      h="80vh"
      py={60}
      style={{
        borderRadius: "2.5rem",
      }}
    >
      <Center>
        <TextInput
          w="65%"
          radius="xl"
          placeholder="Search"
          c="gray.0"
          leftSectionPointerEvents="none"
          leftSection={searchIcon}
          styles={{
            input: {
              background: "white",
              border: "transparent",
            },
          }}
        />
      </Center>
      <Button>Start Quiz</Button>
    </Flex>
  );
};
