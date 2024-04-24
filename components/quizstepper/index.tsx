"use client";
import { Flex, LoadingOverlay, Stepper, rem } from "@mantine/core";
import { IconCircleCheck, IconCircleX } from "@tabler/icons-react";
import { QuizStepContent } from "../quizstepcontent";
import { QuizComplete } from "../quizcomplete";
import { Suspense } from "react";
import { useQuizContext } from "../../context/QuizProvider";

export const QuizStepper = () => {
  const {
    answerResults,
    quizData,
    active,
    setActive,
    answerChosen,
    setAnswerChosen,
  } = useQuizContext();

  return (
    <Flex
      bg="gray.0"
      w={{ base: "80%", md: "50%" }}
      h={{ base: "80%", md: "70%" }}
      style={{
        borderRadius: "2.5rem",
      }}
    >
      <Suspense
        fallback={
          <LoadingOverlay
            visible={!quizData}
            zIndex={1000}
            overlayProps={{ radius: "sm", blur: 2 }}
          />
        }
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
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "2rem",
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
      </Suspense>
    </Flex>
  );
};
