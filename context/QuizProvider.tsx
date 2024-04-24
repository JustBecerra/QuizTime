"use client";
import {
  Dispatch,
  ReactElement,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { getQuestions } from "../api/route";

export type answersType = {
  id: number;
  result: boolean;
};

interface QuizProps {
  answerResults: answersType[];
  setAnswerResults: Dispatch<SetStateAction<answersType[]>>;
  fetchQuestions: () => Promise<never[] | undefined>;
  quizData: Questions[];
  active: number;
  setActive: Dispatch<SetStateAction<number>>;
  answerChosen: boolean;
  setAnswerChosen: Dispatch<SetStateAction<boolean>>;
}

const QuizContext = createContext<QuizProps>({} as QuizProps);

type QuizProviderProps = {
  children: ReactElement;
};

const initialState: answersType[] = Array.from({ length: 10 }, (_, id) => ({
  id,
  result: false,
}));

export const QuizProvider: React.FC<QuizProviderProps> = ({ children }) => {
  const [answerResults, setAnswerResults] =
    useState<answersType[]>(initialState);
  const [quizData, setQuizData] = useState<Questions[]>([]);
  const [active, setActive] = useState(0);
  const [answerChosen, setAnswerChosen] = useState(false);

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
      return [];
    }
  }

  useEffect(() => {
    fetchQuestions();
  }, []);

  return (
    <QuizContext.Provider
      value={{
        answerResults,
        setAnswerResults,
        fetchQuestions,
        quizData,
        active,
        setActive,
        answerChosen,
        setAnswerChosen,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};

export const useQuizContext = (): QuizProps => {
  const {
    answerResults,
    setAnswerResults,
    fetchQuestions,
    quizData,
    active,
    setActive,
    answerChosen,
    setAnswerChosen,
  } = useContext(QuizContext);
  return {
    answerResults,
    setAnswerResults,
    fetchQuestions,
    quizData,
    active,
    setActive,
    answerChosen,
    setAnswerChosen,
  };
};

export default QuizContext;
