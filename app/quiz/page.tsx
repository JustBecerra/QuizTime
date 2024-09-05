"use client";
import { useContext } from "react";
import { QuizStepper } from "../../components/quizstepper";
import { Timer } from "../../components/timer";
import QuizContext from "../../context/QuizProvider";

const Quiz = () => {
  const { active, answerChosen, quizData } = useContext(QuizContext);
  return (
    <>
      {active < 10 && quizData.length > 0 && <Timer active={active} answerChosen={answerChosen} />}
      <QuizStepper />
    </>
  );
};

export default Quiz;
