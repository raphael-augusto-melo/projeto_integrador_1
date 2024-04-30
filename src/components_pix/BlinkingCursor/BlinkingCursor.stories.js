import { BlinkingCursor } from ".";

export default {
  title: "Components/BlinkingCursor",
  component: BlinkingCursor,
  argTypes: {
    property1: {
      options: ["cursor-ON", "cursor-OFF"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "cursor-ON",
    className: {},
    propertyCursorOn: "https://c.animaapp.com/CVAXwU6b/img/blinking-cursor-25@2x.png",
  },
};
