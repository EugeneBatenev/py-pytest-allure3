import { defaultChartsConfig, defineConfig } from "allure";


export default defineConfig({
  name: "Allure Report",
  output: "./allure-report",
  historyPath: "./history.jsonl",
  plugins: {
    testops: {
      options: {
        launchName: `Jenkins agent sends results using allure3 (${new Date().toISOString()})`,
      },
    },
  },
  variables: { },
  environments: {},
});
