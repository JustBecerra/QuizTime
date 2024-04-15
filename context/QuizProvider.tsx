"use client";
import {
  Dispatch,
  ReactElement,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

interface QuizProps {
  answerResults: boolean[];
  setAnswerResults: Dispatch<SetStateAction<boolean[]>>;
}

const QuizContext = createContext<QuizProps>({} as QuizProps);

type QuizProviderProps = {
  children: ReactElement;
};

const initialState: boolean[] = new Array(10).fill(false);

export const QuizProvider: React.FC<QuizProviderProps> = ({ children }) => {
  const [answerResults, setAnswerResults] = useState<boolean[]>(initialState);
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
