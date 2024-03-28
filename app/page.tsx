import { Flex } from "@mantine/core";
import { Header } from "../components/header";
import { Maininfocard } from "../components/maininfocard";
import { SearchBar } from "../components/searchbar";
import { Footer } from "../components/footer";

export default function HomePage() {
  return (
    <Flex
      mih={100}
      direction={"column"}
      gap={20}
      style={{ background: "linear-gradient(135deg, #3550DC, #27E9F7)" }}
    >
      <Header />
      <SearchBar />
      <Maininfocard />
      <Footer />
    </Flex>
  );
}
