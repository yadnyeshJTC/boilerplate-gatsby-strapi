module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST'),
      port: env.int('DATABASE_PORT'),
      database: env('DATABASE_NAME'),
      user: env('DATABASE_USERNAME'),
      password: env('DATABASE_PASSWORD'),
      // see - https://docs.strapi.io/developer-docs/latest/setup-deployment-guides/configurations/required/databases.html#configuration-structure
      // info - database ssl is turned off in non-production env
      ssl: env('NODE_ENV') !== 'production' ? false : {
        rejectUnauthorized: env.bool('DATABASE_SSL_SELF', false), // For self-signed certificates
      },
    },
    // DATABASE_SINGLE_CONN enforces single connection and disables connection pooling
    // see - https://docs.strapi.io/developer-docs/latest/setup-deployment-guides/configurations/required/databases.html#configuration-structure
    pool: env('DATABASE_SINGLE_CONN') !== 'true' ? null : {
      min: 1,
      max: 1,
    },
    debug: false,
  },
});
