import { Container, Title } from "@mantine/core";
import React from "react";

export const Header = () => {
  return (
    <Container>
      <Title order={1} c="gray.0">
        Fun History Quiz
      </Title>
      <Title order={3} c="gray.0">
        User
      </Title>
    </Container>
  );
};
