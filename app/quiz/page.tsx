"use client";
import { Container, Flex, Stepper } from "@mantine/core";
import { useEffect, useState } from "react";
import { getQuestions } from "../../api/route";
import { QuizStepContent } from "../../components/quizstepcontent";

const Quiz = () => {
  const [quizData, setQuizData] = useState<Questions[]>();
  const [active, setActive] = useState(0);
  useEffect(() => {
    async function fetchQuestions() {
      try {
        const data = await getQuestions();
        console.log({ data });
        for (let i = data.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [data[i], data[j]] = [data[j], data[i]];
        }

        const randomizedData = data.slice(0, 10);
        console.log({ randomizedData });
        setQuizData(randomizedData);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    }

    fetchQuestions();
  }, []);

  return (
    <Flex
      bg="gray.0"
      w={{ base: "90%", md: "50%" }}
      h="65vh"
      style={{
        borderRadius: "2.5rem",
      }}
    >
      <Container>
        <Stepper
          active={active}
          onStepClick={setActive}
          allowNextStepsSelect={false}
          styles={{
            steps: {
              flexWrap: "nowrap",
              marginTop: "1rem",
            },
          }}
        >
          {quizData?.map((quiz, index) => (
            <Stepper.Step key={index}>
              <QuizStepContent quiz={quiz} />
            </Stepper.Step>
          ))}
        </Stepper>
      </Container>
    </Flex>
  );
};

export default Quiz;
