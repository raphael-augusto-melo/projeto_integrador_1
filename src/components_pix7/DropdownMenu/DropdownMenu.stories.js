import { DropdownMenu } from ".";

export default {
  title: "Components/DropdownMenu",
  component: DropdownMenu,
  argTypes: {
    option: {
      options: ["two", "one", "three", "default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    option: "two",
    visibleOptions: true,
    className: {},
    text: "Selecione a opção",
  },
};
