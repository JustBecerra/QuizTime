import { Button, Flex, Modal, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { postQuestion } from "../../api/route";

type SubmitModalProps = {
  opened: boolean;
  close: () => void;
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

  const handleSubmit = async (values: SubmitQuestionType) => {
    Form.validate();
    if (Form.isValid()) {
      await postQuestion(values);
    }
  };
  return (
    <Modal opened={opened} onClose={close} title="New Question" centered>
      <form onSubmit={Form.onSubmit((values) => handleSubmit(values))}>
        <Flex direction="column" gap="md" align="center">
          <TextInput
            withAsterisk
            key={Form.key("question")}
            radius="lg"
            label="Question"
            w="100%"
            {...Form.getInputProps("question")}
          />
          <TextInput
            withAsterisk
            key={Form.key("correctAnswer")}
            radius="lg"
            label="Correct answer"
            w="100%"
            {...Form.getInputProps("correctAnswer")}
          />
          <TextInput
            withAsterisk
            key={Form.key("wrongAnswer1")}
            radius="lg"
            label="Wrong answer #1"
            w="100%"
            {...Form.getInputProps("wrongAnswer1")}
          />
          <TextInput
            withAsterisk
            key={Form.key("wrongAnswer2")}
            radius="lg"
            label="Wrong answer #2"
            w="100%"
            {...Form.getInputProps("wrongAnswer2")}
          />
          <TextInput
            withAsterisk
            key={Form.key("wrongAnswer3")}
            radius="lg"
            label="Wrong answer #3"
            w="100%"
            {...Form.getInputProps("wrongAnswer3")}
          />
          <Button type="submit" variant="light" w="50%">
            Submit
          </Button>
        </Flex>
      </form>
    </Modal>
  );
};
