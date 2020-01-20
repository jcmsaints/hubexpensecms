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
      },
      // Options reference: https://pm2.keymetrics.io/docs/usage/application-declaration/
      args: "one two",
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "1G",
      env_production: {
        NODE_ENV: "production"
      }
    }
  ],

  deploy: {
    production: {
      user: "node",
      host: "212.83.163.1",
      ref: "origin/master",
      repo: "git@github.com:repo.git",
      path: "/var/www/production",
      "post-deploy":
        "npm install && pm2 reload ecosystem.config.js --env production"
    }
  }
};
