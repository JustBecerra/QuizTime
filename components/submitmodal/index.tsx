import { Button, Flex, Modal, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { postQuestion } from "../../api/route";
import { Bounce, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
type SubmitModalProps = {
  opened: boolean;
  close: () => void;
};

export const SubmitModal = (props: SubmitModalProps) => {
  const { opened, close } = props;

  const Form = useForm({
    initialValues: {
      question: "",
      correctanswer: "",
      incorrectanswers: ["", "", ""],
    },
    validate: {
      question: (value) => (value[value.length - 1] !== "?" ? 'Question should end with a "?"' : null),
      correctanswer: (value) => (value.length === 0 ? "Correct answer is required" : null),
      incorrectanswers: (value) => (value.some((answer) => answer.length === 0) ? "All incorrect answers are required" : null),
    },
  });

  const handleSubmit = async (values: typeof Form.values) => {
    try {
      Form.validate();
      if (Form.isValid()) {
        await postQuestion(values);
      }
      toast.success("Question Submitted!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
      close();
      Form.reset();
    } catch (err) {
      console.error("Error submitting form:", err);
      toast.error("Error submitting question!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
    }
  };

  return (
    <Modal opened={opened} onClose={close} title="New Question" centered>
      <form onSubmit={Form.onSubmit((values) => handleSubmit(values))}>
        <Flex direction="column" gap="md" align="center">
          <TextInput withAsterisk key={Form.key("question")} radius="lg" label="Question" w="100%" {...Form.getInputProps("question")} />
          <TextInput
            withAsterisk
            key={Form.key("correctanswer")}
            radius="lg"
            label="Correct answer"
            w="100%"
            {...Form.getInputProps("correctanswer")}
          />
          {Form.values.incorrectanswers.map((_, index) => (
            <TextInput
              withAsterisk
              key={Form.key(`incorrectanswers.${index}`)}
              radius="lg"
              label={`Wrong answer #${index + 1}`}
              w="100%"
              {...Form.getInputProps(`incorrectanswers.${index}`)}
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
