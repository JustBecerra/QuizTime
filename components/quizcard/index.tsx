import { Button, Card, Text } from "@mantine/core";
import React from "react";

export const Quizcard = () => {
  return (
    <Card
      style={{ flex: "0 0 auto" }}
      shadow="sm"
      padding="lg"
      radius="md"
      p={10}
      m={5}
      withBorder
    >
      <Text>really awesome title</Text>
      <Text>really awesome titleasdasdasdasdasdasdasdasdasdasdasdasd</Text>
      <Button>Start</Button>
    </Card>
  );
};
