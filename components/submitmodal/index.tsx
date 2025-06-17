import { Modal } from "@mantine/core";
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
      question: (value: any) => (value[value.length - 1] !== "?" ? 'Question should end with a "?"' : null),
      correctanswer: (value: any) => (value.length === 0 ? "Correct answer is required" : null),
      incorrectanswers: (value: any) => (value.some((answer: any) => answer.length === 0) ? "All incorrect answers are required" : null),
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
      <form onSubmit={Form.onSubmit((values) => handleSubmit(values))} className="flex flex-col gap-4 items-center">
        <div className="w-full">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Question <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            {...Form.getInputProps("question")}
          />
          {Form.errors.question && (
            <p className="mt-1 text-sm text-red-600">{Form.errors.question}</p>
          )}
        </div>

        <div className="w-full">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Correct answer <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            {...Form.getInputProps("correctanswer")}
          />
          {Form.errors.correctanswer && (
            <p className="mt-1 text-sm text-red-600">{Form.errors.correctanswer}</p>
          )}
        </div>

        {Form.values.incorrectanswers.map((_, index) => (
          <div key={Form.key(`incorrectanswers.${index}`)} className="w-full">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Wrong answer #{index + 1} <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              {...Form.getInputProps(`incorrectanswers.${index}`)}
            />
            {Form.errors[`incorrectanswers.${index}`] && (
              <p className="mt-1 text-sm text-red-600">{Form.errors[`incorrectanswers.${index}`]}</p>
            )}
          </div>
        ))}

        <button
          type="submit"
          className="w-1/2 px-4 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors"
        >
          Submit
        </button>
      </form>
    </Modal>
  );
};
