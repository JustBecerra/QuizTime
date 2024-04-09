"use client";
import { Button, Flex, Stepper, Text } from "@mantine/core";
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
        for (let i = data.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [data[i], data[j]] = [data[j], data[i]];
        }
        const randomizedData = data.slice(0, 10);
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
      w={{ base: "80%", md: "50%" }}
      h={{ base: "80%", md: "70%" }}
      style={{
        borderRadius: "2.5rem",
      }}
    >
      <Stepper
        active={active}
        onStepClick={setActive}
        allowNextStepsSelect={false}
        styles={{
          steps: {
            flexWrap: "nowrap",
            marginTop: "2rem",
            width: "90%",
            height: "4rem",
            overflowX: "auto",
            overflowY: "hidden",
          },
          root: {
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          },
        }}
      >
        {quizData?.map((quiz, index) => (
          <Stepper.Step key={index}>
            <QuizStepContent quiz={quiz} setActive={setActive} />
            <Stepper.Completed>
              <Text>
                Quiz done! click on the home button or try again if you feel
                like it.
              </Text>
              <Button>Home</Button>
              <Button>Play again</Button>
            </Stepper.Completed>
          </Stepper.Step>
        ))}
      </Stepper>
    </Flex>
  );
};

export default Quiz;
