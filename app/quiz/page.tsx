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
        setQuizData(data);
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
          <Stepper.Step>
            <QuizStepContent />
          </Stepper.Step>
          <Stepper.Step>2</Stepper.Step>
          <Stepper.Step>3</Stepper.Step>
          <Stepper.Step>4</Stepper.Step>
          <Stepper.Step>5</Stepper.Step>
          <Stepper.Step>6</Stepper.Step>
          <Stepper.Step>7</Stepper.Step>
          <Stepper.Step>8</Stepper.Step>
          <Stepper.Step>9</Stepper.Step>
          <Stepper.Step>10</Stepper.Step>
        </Stepper>
      </Container>
    </Flex>
  );
};

export default Quiz;
