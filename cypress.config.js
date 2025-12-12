const { defineConfig } = require("cypress");
const fs = require("fs");

function getConfigFile(env) {
  const file = `config/${env}.json`;
  return fs.readFileSync(file, "utf8");
}

module.exports = defineConfig({
  reporter: "mochawesome",

  reporterOptions: {
    reportDir: "cypress/reports",
    overwrite: true,
    html: true,
    json: true,
  },
  e2e: {
    setupNodeEvents(on, config) {
      const envName = config.env.configFile || "dev";
      return Object.assign({}, config, JSON.parse(getConfigFile(envName)));
    },
  },
  env: {
    stage: "https://staging-servicedesk.layanan.go.id/user/sign-in",
  },
});
