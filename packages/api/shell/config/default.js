module.exports = {
  rest: {
    port: +(process.env.PORT ?? 3000),
    host: process.env.HOST,
    gracePeriodForClose: 5000, // 5 seconds
    openApiSpec: {
      setServersFromRequest: true,
    },
  },
  db: {
    name: process.env.SHELL_DB_NAME || 'Shell',
    connector: 'mongodb',
    url: process.env.SHELL_DB_URL || '',
    host: process.env.SHELL_DB_HOST || 'localhost',
    port: process.env.SHELL_DB_PORT || 27017,
    user: process.env.SHELL_DB_USER || '',
    password: process.env.SHELL_DB_PASSWORD || '',
    database: process.env.SHELL_DB_DATABASE || 'shell',
  },
};
