import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { Maininfocard } from "../components/maininfocard";

export default async function HomePage() {
  return (
    <>
      <Header />
      <Maininfocard />
      <Footer />
    </>
  );
}
