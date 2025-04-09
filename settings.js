var settings = {
  development: {
    db: {
      host: process.env.host || 'pgmaster', // Use the service name defined in docker-compose.yml
      port: 5432,
      user: 'postgres',
      password: 'password', // Ensure this matches the password in db/password.txt
      database: 'notejam'
    },
    dsn: "postgres://postgres:password@pgmaster:5432/notejam" // Update the host to 'db'
    // dsn: `postgres://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`
  }
};

// var env = process.env.NODE_ENV;
// if (!env) {
  env = 'development';
// }
module.exports = settings[env];

