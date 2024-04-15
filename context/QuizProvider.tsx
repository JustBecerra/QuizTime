"use client";
import {
  Dispatch,
  ReactElement,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

type answersType = {
  id: number;
  result: boolean;
};

interface QuizProps {
  answerResults: answersType[];
  setAnswerResults: Dispatch<SetStateAction<answersType[]>>;
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
  return (
    <QuizContext.Provider
      value={{
        answerResults,
        setAnswerResults,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};

export const useQuizContext = (): QuizProps => {
  const { answerResults, setAnswerResults } = useContext(QuizContext);
  return {
    answerResults,
    setAnswerResults,
  };
};

export default QuizContext;
