"use client";
import { Stepper, rem } from "@mantine/core";
import { IconCircleCheck, IconCircleX } from "@tabler/icons-react";
import { QuizStepContent } from "../quizstepcontent";
import { QuizComplete } from "../quizcomplete";
import { useQuizContext } from "../../context/QuizProvider";
import { useEffect, useRef } from "react";

export const QuizStepper = () => {
  const { answerResults, quizData, active, setActive, answerChosen, setAnswerChosen } = useQuizContext();
  const stepRefs = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    const currentStep = stepRefs.current[active];
    if (currentStep) {
      currentStep.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [active]);

  return (
    <div className="bg-gray-50 w-[80%] md:w-[50%] lg:w-[70%] h-[90%] lg:h-[80%] rounded-[2.5rem]">
      <Stepper
        active={active}
        onStepClick={setActive}
        allowNextStepsSelect={false}
        styles={{
          steps: {
            flexWrap: "nowrap",
            marginTop: "2rem",
            width: "90%",
            height: "6rem",
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
            flex: 1,
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
          },
        }}
      >
        {quizData.map((quiz, index) => (
          <Stepper.Step
            key={index}
            color={answerResults[index].result ? "green" : "red"}
            ref={(el) => (stepRefs.current[index] = el)}
            allowStepSelect={false}
            completedIcon={
              answerResults[index].result ? (
                <IconCircleCheck style={{ width: rem(24), height: rem(24) }} />
              ) : (
                <IconCircleX style={{ width: rem(24), height: rem(24) }} />
              )
            }
          >
            <QuizStepContent quiz={quiz} setActive={setActive} setAnswerChosen={setAnswerChosen} answerChosen={answerChosen} index={index} />
          </Stepper.Step>
        ))}
        <Stepper.Completed>
          <QuizComplete setActive={setActive} answerResults={answerResults} quizData={quizData} />
        </Stepper.Completed>
      </Stepper>
    </div>
  );
};
