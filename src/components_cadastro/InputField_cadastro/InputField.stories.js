import { InputField } from ".";

export default {
  title: "Components/InputField",
  component: InputField,
  argTypes: {
    property1: {
      options: ["default-state", "active-state"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "default-state",
    className: {},
    keyFieldClassName: {},
    text: "Name",
  },
};
