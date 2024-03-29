"use client";
import { Flex, Tabs } from "@mantine/core";
import { Quizcard } from "../quizcard";

export const Maininfocard = () => {
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
      <Tabs h={"100%"}>
        <Tabs.List>
          <Tabs.Tab value="wwi">WWI</Tabs.Tab>
          <Tabs.Tab value="wwii">WWII</Tabs.Tab>
          <Tabs.Tab value="coldwar">Cold War</Tabs.Tab>
          <Tabs.Tab value="modern">Modern</Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel value="wwi">
          <Flex
            direction="column"
            mah={500}
            gap={36}
            style={{ overflowY: "auto" }}
          >
            <Quizcard />
            <Quizcard />
            <Quizcard />
            <Quizcard />
            <Quizcard />
            <Quizcard />
          </Flex>
        </Tabs.Panel>
        <Tabs.Panel value="wwii">
          <Quizcard />
        </Tabs.Panel>
        <Tabs.Panel value="coldwar">
          <Quizcard />
        </Tabs.Panel>
        <Tabs.Panel value="modern">
          <Quizcard />
        </Tabs.Panel>
      </Tabs>
    </Flex>
  );
};
