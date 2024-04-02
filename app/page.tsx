import { Flex } from "@mantine/core";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { Maininfocard } from "../components/maininfocard";
import { getQuestions } from "../api/route";

export default async function HomePage() {
  const data = await getQuestions();
  return (
    <Flex
      direction={"column"}
      gap={20}
      style={{
        background: "linear-gradient(135deg, #3550DC, #27E9F7)",
        height: "100%",
      }}
    >
      <Header />
      <Maininfocard />
      <Footer />
    </Flex>
  );
}
