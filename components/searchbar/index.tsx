import { Center, TextInput, rem } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";

export const SearchBar = () => {
  const searchIcon = <IconSearch style={{ width: rem(16), height: rem(16) }} />;
  return (
    <Center>
      <TextInput
        w="65%"
        radius="xl"
        placeholder="Search"
        c="gray.0"
        leftSectionPointerEvents="none"
        leftSection={searchIcon}
        styles={{
          input: {
            background: "white",
            border: "transparent",
          },
        }}
      />
    </Center>
  );
};
