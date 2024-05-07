export type checkboxOptionsType = {
  label: string;
  title: string;
  state: boolean;
};

export const checkboxOptions: checkboxOptionsType[] = [
  {
    label: "uppercase",
    title: "Include Uppercase Letters",
    state: false,
  },
  {
    label: "lowercase",
    title: "Include Lowercase Letters",
    state: false,
  },
  {
    label: "numbers",
    title: "Include Numbers",
    state: false,
  },
  {
    label: "symbols",
    title: "Include Symbols",
    state: false,
  },
];
