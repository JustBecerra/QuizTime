import { Header } from "../components/header";
import { Maininfocard } from "../components/maininfocard";
import { QuizProvider } from "../context/QuizProvider";

export default async function HomePage() {
  return (
    <QuizProvider>
      <>
        <Header />
        <Maininfocard />
      </>
    </QuizProvider>
  );
}
