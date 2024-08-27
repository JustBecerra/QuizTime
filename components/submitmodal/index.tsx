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
    initialValues: {
      question: "",
      correctAnswer: "",
      incorrectAnswers: ["", "", ""],
    },
    validate: {
      question: (value) => (value[value.length - 1] !== "?" ? 'Question should end with a "?"' : null),
      correctAnswer: (value) => (value.length === 0 ? "Correct answer is required" : null),
      incorrectAnswers: (value) => (value.some((answer) => answer.length === 0) ? "All incorrect answers are required" : null),
    },
  });

  const handleSubmit = async (values: typeof Form.values) => {
    Form.validate();
    if (Form.isValid()) {
      await postQuestion(values);
    }
  };

  return (
    <Modal opened={opened} onClose={close} title="New Question" centered>
      <form onSubmit={Form.onSubmit((values) => handleSubmit(values))}>
        <Flex direction="column" gap="md" align="center">
          <TextInput withAsterisk key={Form.key("question")} radius="lg" label="Question" w="100%" {...Form.getInputProps("question")} />
          <TextInput
            withAsterisk
            key={Form.key("correctAnswer")}
            radius="lg"
            label="Correct answer"
            w="100%"
            {...Form.getInputProps("correctAnswer")}
          />
          {Form.values.incorrectAnswers.map((_, index) => (
            <TextInput
              withAsterisk
              key={Form.key(`incorrectAnswers.${index}`)}
              radius="lg"
              label={`Wrong answer #${index + 1}`}
              w="100%"
              {...Form.getInputProps(`incorrectAnswers.${index}`)}
            />
          ))}
          <Button type="submit" variant="light" w="50%">
            Submit
          </Button>
        </Flex>
      </form>
    </Modal>
  );
};
