import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { letterArray } from "../../helper/letterstorage";
import { useQuizContext } from "../../context/QuizProvider";

interface QuizStepContentProps {
  quiz: Questions;
  setActive: Dispatch<SetStateAction<number>>;
  answerChosen: boolean;
  setAnswerChosen: Dispatch<SetStateAction<boolean>>;
  index: number;
}

export const QuizStepContent: React.FC<QuizStepContentProps> = (props) => {
  const { quiz, setActive, answerChosen, setAnswerChosen, index } = props;
  const [answers, setAnswers] = useState<string[]>([]);
  const { setAnswerResults } = useQuizContext();

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * (quiz.incorrectanswers.length + 1));
    const newArray = [...quiz.incorrectanswers.slice(0, randomIndex), quiz.correctanswer, ...quiz.incorrectanswers.slice(randomIndex)];
    setAnswers(newArray);
  }, [quiz.correctanswer, quiz.incorrectanswers]);

  const getButtonColor = (answer: string) => {
    if (answer === quiz.correctanswer && answerChosen) {
      return "bg-green-600 hover:bg-green-700";
    } else if (answerChosen && answer !== quiz.correctanswer) {
      return "bg-red-600 hover:bg-red-700";
    } else {
      return "bg-gray-800 hover:bg-gray-900";
    }
  };

  const nextQuestion = () => {
    setActive((prev) => prev + 1);
    setAnswerChosen(false);
  };

  const CheckAnswer = (answer: string) => {
    setAnswerChosen(true);
    setAnswerResults((prevResults) => {
      const updatedResults = [...prevResults];
      if (answer === quiz.correctanswer && index === updatedResults[index].id) {
        updatedResults[index].result = true;
      } else if (answer !== quiz.correctanswer && index === updatedResults[index].id) {
        updatedResults[index].result = false;
      }
      return updatedResults;
    });
  };

  return (
    <div className="flex justify-center w-full h-full items-center flex-col gap-8">
      <div className="flex justify-center items-center flex-col">
        <h2 className="text-gray-900 text-2xl md:block hidden mx-4 mt-4">
          {typeof quiz.question === "string" ? quiz.question : quiz.question.text}
        </h2>
        {typeof quiz.question === "string" && (
          <p className="text-gray-900 md:block hidden text-base">
            User submitted question
          </p>
        )}
      </div>
      <div className="md:hidden">
        <h2 className="text-gray-900 text-base mx-4">
          {typeof quiz.question === "string" ? quiz.question : quiz.question.text}
        </h2>
        {typeof quiz.question === "string" && (
          <p className="text-gray-900 text-xs">
            User submitted question
          </p>
        )}
      </div>

      <div className="flex flex-col gap-8 w-full items-center">
        {answers.map((answer, index) => (
          <button
            key={index}
            className={`${getButtonColor(answer)} text-white px-4 py-2 rounded-lg h-16 w-[90%] md:w-[60%] flex items-center transition-colors`}
            onClick={() => CheckAnswer(answer)}
          >
            <span className="mr-2">{letterArray[index]}</span>
            <span className="md:text-base text-sm whitespace-pre-wrap break-words leading-5 md:leading-6">
              {answer}
            </span>
          </button>
        ))}
      </div>
      <button
        disabled={!answerChosen}
        onClick={nextQuestion}
        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors mb-4"
      >
        Next
      </button>
    </div>
  );
};
