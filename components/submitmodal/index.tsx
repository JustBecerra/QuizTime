import { Button, Flex, Modal, TextInput } from "@mantine/core";

type SubmitModalProps = {
  opened: boolean;
  close: () => void;
};

export const SubmitModal = (props: SubmitModalProps) => {
  const { opened, close } = props;
  return (
    <Modal opened={opened} onClose={close} title="New Question" centered>
      <Flex direction="column" gap="md">
        <TextInput radius="lg" label="Question" />
        <TextInput radius="lg" label="Correct answer" />
        <TextInput radius="lg" label="Wrong answer #1" />
        <TextInput radius="lg" label="Wrong answer #2" />
        <TextInput radius="lg" label="Wrong answer #3" />
        <Button variant="light">Send</Button>
      </Flex>
    </Modal>
  );
};
