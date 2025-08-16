import { type Environment, builtinEnvironments } from "vitest/environments";

export default <Environment>{
  name: "vitest-environment-happy-dom",
  transformMode: "ssr",
  async setup(global, options) {
    return builtinEnvironments["happy-dom"].setup(global, options);
  },
};
