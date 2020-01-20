module.exports = {
  apps: [
    {
      name: "strapi",
      cwd: "/home/ubuntu/hubexpensecms",
      script: "server.js",
      env: {
        NODE_ENV: "production",
        DATABASE_HOST:
          "strapi-database.cizkqgfuujoz.eu-west-2.rds.amazonaws.com", // database Endpoint under 'Connectivity & Security' tab
        DATABASE_PORT: "5432",
        DATABASE_NAME: "strapi", // DB name under 'Configuration' tab
        DATABASE_USERNAME: "HubExpense", // default username
        DATABASE_PASSWORD: "Hub$pense.1"
      }
    }
  ]
};
