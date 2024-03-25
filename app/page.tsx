import { Flex } from "@mantine/core";
import { Header } from "../components/header";

export default function HomePage() {
  return (
    <Flex
      mih={100}
      style={{ background: "linear-gradient(135deg, #3550DC, #27E9F7)" }}
    >
      <Header />
    </Flex>
  );
}
