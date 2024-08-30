type QuestionText = {
  text: string;
};

type Questions = {
  category: string;
  id: string;
  tags: string[];
  difficulty: string;
  regions: string[];
  isNiche: boolean;
  question: QuestionText | string;
  correctanswer: string;
  incorrectanswers: string[];
  type: string;
};

type SubmitQuestionType = {
  question: string;
  correctanswer: string;
  incorrectanswers: string[];
};
