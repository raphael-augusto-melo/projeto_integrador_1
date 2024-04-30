import { Component } from ".";

export default {
  title: "Components/Component",
  component: Component,
  argTypes: {
    property1: {
      options: ["male-user", "sidebar"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "male-user",
    className: {},
  },
};
