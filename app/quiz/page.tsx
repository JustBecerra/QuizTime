"use client";
import { Flex, LoadingOverlay, Stepper, rem } from "@mantine/core";
import { useEffect, useState } from "react";
import { getQuestions } from "../../api/route";
import { QuizStepContent } from "../../components/quizstepcontent";
import { Timer } from "../../components/timer";
import { IconCircleCheck, IconCircleX } from "@tabler/icons-react";
import { useQuizContext } from "../../context/QuizProvider";
import { QuizComplete } from "../../components/quizcomplete";

const Quiz = () => {
  const [quizData, setQuizData] = useState<Questions[]>([]);
  const [active, setActive] = useState(0);
  const [answerChosen, setAnswerChosen] = useState(false);
  const { answerResults } = useQuizContext();

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
        <LoadingOverlay
          visible={!quizData}
          zIndex={1000}
          overlayProps={{ radius: "sm", blur: 2 }}
        />
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

export default Quiz;
