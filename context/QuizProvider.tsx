import {
  Dispatch,
  ReactElement,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

interface answersType {
  id: number;
  result: boolean;
}

interface QuizProps {
  answerResults: answersType[];
  setAnswerResults: Dispatch<SetStateAction<answersType[]>>;
}

const QuizContext = createContext<QuizProps>({} as QuizProps);

type QuizProviderProps = {
  children: ReactElement;
};

export const QuizProvider: React.FC<QuizProviderProps> = ({ children }) => {
  const [answerResults, setAnswerResults] = useState<answersType[]>([]);
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
