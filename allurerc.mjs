import { defaultChartsConfig, defineConfig } from "allure";


export default defineConfig({
  name: "Allure Report",
  output: "./allure-report",
  historyPath: "./history.jsonl",
  plugins: {
    testops: {
      options: { },
    },
  },
  variables: { },
  environments: {},
});
