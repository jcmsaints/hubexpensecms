module.exports = {
  apps: [
    {
      name: "strapi",
      cwd:
        "/Users/jcmss111/Desktop/Mestrado/1semestre/PW/Projecto Final/projecto_cms/hubexpensecms/hubexpensecms",
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
