module.exports = {
  port: 3000,
  db: {
    database: process.env.DB_NAME || "webblog",
    user: process.env.DB_User || "root",
    password: process.env.DB_PASS || "",
    options: {
      dialect: process.env.DIALECT || "sqlite",
      storage: "./nvwebblog-db.sqlite",
      // host: process.env.HOST || 'localhost',
    },
  },
  // authentication: {
  //   jwtSecret: "korn",
  // },
};
