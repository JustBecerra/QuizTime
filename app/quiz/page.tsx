import { Suspense } from "react";
import { getQuestions } from "../../api/route";
import { QuizStepper } from "../../components/quizstepper";
import { LoadingOverlay } from "@mantine/core";

const Quiz = async () => {
  async function fetchQuestions(): Promise<Questions[]> {
    try {
      const data = await getQuestions();
      for (let i = data.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [data[i], data[j]] = [data[j], data[i]];
      }
      const randomizedData = data.slice(0, 10);
      return randomizedData;
    } catch (error) {
      console.error("Failed to fetch data:", error);
      return [];
    }
  }

  const quizData = await fetchQuestions();

  return (
    <Suspense
      fallback={
        <LoadingOverlay
          visible={!quizData}
          zIndex={1000}
          overlayProps={{ radius: "sm", blur: 2 }}
        />
      }
    >
      <QuizStepper quizData={quizData} />
    </Suspense>
  );
};

export default Quiz;
