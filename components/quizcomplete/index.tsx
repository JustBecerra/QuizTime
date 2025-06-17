import Link from "next/link";
import { Dispatch, SetStateAction, useContext, useState } from "react";
import QuizContext, { answersType } from "../../context/QuizProvider";

interface props {
  setActive: Dispatch<SetStateAction<number>>;
  quizData: Questions[];
  answerResults: answersType[];
}

export const QuizComplete = (props: props) => {
  const { answerResults, quizData } = props;
  const [degrees, setDegrees] = useState(0);
  const { handlePlayAgain } = useContext(QuizContext);
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

  const results = answerResults.filter((res) => res.result).length;

  const resultText = () => {
    if (results === 10) {
      return "Perfect score! I wonder if you can get it again.";
    } else if (results >= 6 && results < 10) {
      return "You missed some but you did alright!";
    } else {
      return `You should keep practicing, you'll get the hang of it.`;
    }
  };

  const getResultColor = () => {
    if (results === 10) {
      return "text-green-600";
    } else if (results >= 6 && results < 10) {
      return "text-yellow-500";
    } else {
      return "text-red-500";
    }
  };

  return (
    <div className="flex flex-col h-64 w-64 gap-8 items-center justify-center">
      {quizData.length > 0 ? (
        <>
          <span className={`${getResultColor()} font-bold text-6xl`}>
            {results}/10
          </span>
          <p className="text-gray-900 italic text-center">
            {resultText()}
          </p>
        </>
      ) : (
        <div className="w-full h-1/2">
          <span className={`w-full block ${getResultColor()} font-semibold text-2xl`}>
            The server is loading, give it a second or two.
          </span>
        </div>
      )}

      <div className="flex gap-4">
        <Link href={"/"}>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            Home
          </button>
        </Link>
        <button
          className="px-4 py-2 text-white rounded-lg transition-all"
          style={{
            background: `linear-gradient(${degrees}deg, #ec4899, #06b6d4)`,
          }}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          onClick={handlePlayAgain}
        >
          Play again
        </button>
      </div>
    </div>
  );
};
