import { Button, Flex, Modal, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";

type SubmitModalProps = {
  opened: boolean;
  close: () => void;
};

type SubmitQuestionType = {
  question: string;
  correctAnswer: string;
  wrongAnswer1: string;
  wrongAnswer2: string;
  wrongAnswer3: string;
};

export const SubmitModal = (props: SubmitModalProps) => {
  const { opened, close } = props;
  const Form = useForm({
    mode: "uncontrolled",
    initialValues: {
      question: "",
      correctAnswer: "",
      wrongAnswer1: "",
      wrongAnswer2: "",
      wrongAnswer3: "",
    },
    validate: {
      question: (value) => value[value.length - 1] !== "?",
      correctAnswer: (value) => value.length === 0,
      wrongAnswer1: (value) => value.length === 0,
      wrongAnswer2: (value) => value.length === 0,
      wrongAnswer3: (value) => value.length === 0,
    },
  });

  const handleSubmit = (values: SubmitQuestionType) => {
    Form.validate();
    if (Form.isValid()) {
      //send request
      console.log({ values });
    }
  };
  return (
    <Modal opened={opened} onClose={close} title="New Question" centered>
      <Flex direction="column" gap="md">
        <form onSubmit={Form.onSubmit((values) => handleSubmit(values))}>
          <TextInput
            withAsterisk
            key={Form.key("question")}
            radius="lg"
            label="Question"
            {...Form.getInputProps("question")}
          />
          <TextInput
            withAsterisk
            key={Form.key("correctAnswer")}
            radius="lg"
            label="Correct answer"
            {...Form.getInputProps("correctAnswer")}
          />
          <TextInput
            withAsterisk
            key={Form.key("wrongAnswer1")}
            radius="lg"
            label="Wrong answer #1"
            {...Form.getInputProps("wrongAnswer1")}
          />
          <TextInput
            withAsterisk
            key={Form.key("wrongAnswer2")}
            radius="lg"
            label="Wrong answer #2"
            {...Form.getInputProps("wrongAnswer2")}
          />
          <TextInput
            withAsterisk
            key={Form.key("wrongAnswer3")}
            radius="lg"
            label="Wrong answer #3"
            {...Form.getInputProps("wrongAnswer3")}
          />
          <Button type="submit" variant="light">
            Send
          </Button>
        </form>
      </Flex>
    </Modal>
  );
};
