"use client";
import { Button, Flex, Stepper, Text } from "@mantine/core";
import { useEffect, useState } from "react";
import { getQuestions } from "../../api/route";
import { QuizStepContent } from "../../components/quizstepcontent";

const Quiz = () => {
  const [quizData, setQuizData] = useState<Questions[]>();
  const [active, setActive] = useState(0);
  const [degrees, setDegrees] = useState(0);
  let intervalId: NodeJS.Timeout;

  const handleMouseOver = () => {
    intervalId = setInterval(() => {
      setDegrees((degrees) => degrees + 1);
    }, 10);
  };

  const handleMouseOut = () => {
    clearInterval(intervalId);
    setDegrees(0);
  };

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
          </Stepper.Step>
        ))}
        <Stepper.Completed>
          <Flex
            direction="column"
            m="auto"
            h="16rem"
            w="16rem"
            justify="flex-end"
            gap="lg"
          >
            <Text c="gray.9">
              Quiz done! click on the home button or try again if you feel like
              it.
            </Text>
            <Text c="gray.9">7/10 placeholder</Text>
            <Flex gap="lg">
              <Button>Home</Button>
              <Button
                variant="gradient"
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
                gradient={{ from: "pink", to: "cyan", deg: degrees }}
              >
                Play again
              </Button>
            </Flex>
          </Flex>
        </Stepper.Completed>
      </Stepper>
    </Flex>
  );
};

export default Quiz;
