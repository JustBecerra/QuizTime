"use client";
import { Flex, Stepper, rem } from "@mantine/core";
import { IconCircleCheck, IconCircleX } from "@tabler/icons-react";
import { QuizStepContent } from "../quizstepcontent";
import { QuizComplete } from "../quizcomplete";
import { useState } from "react";
import { useQuizContext } from "../../context/QuizProvider";
import { Timer } from "../timer";

interface QuizDataInt {
  quizData: Questions[];
}

export const QuizStepper = (props: QuizDataInt) => {
  const { quizData } = props;
  const [active, setActive] = useState(0);
  const [answerChosen, setAnswerChosen] = useState(false);
  const { answerResults } = useQuizContext();

  return (
    <>
      {active < 10 && <Timer active={active} answerChosen={answerChosen} />}
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
              height: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            },
            content: {
              paddingTop: 0,
              margin: "auto",
            },
          }}
        >
          {quizData.map((quiz, index) => (
            <Stepper.Step
              key={index}
              color={answerResults[index].result ? "green" : "red"}
              completedIcon={
                answerResults[index].result ? (
                  <IconCircleCheck
                    style={{ width: rem(24), height: rem(24) }}
                  />
                ) : (
                  <IconCircleX style={{ width: rem(24), height: rem(24) }} />
                )
              }
            >
              <QuizStepContent
                quiz={quiz}
                setActive={setActive}
                setAnswerChosen={setAnswerChosen}
                answerChosen={answerChosen}
                index={index}
              />
            </Stepper.Step>
          ))}
          <Stepper.Completed>
            <QuizComplete setActive={setActive} answerResults={answerResults} />
          </Stepper.Completed>
        </Stepper>
      </Flex>
    </>
  );
};
