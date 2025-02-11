module.exports = {
  apps: [
    {
      name: "inventory-mangement",
      script: "npm",
      args: "run dev",
      env: {
        NODE_ENV: "development",
        ENV_VARIABLE: "envrionment variable",
      }
    },
  ],
};
