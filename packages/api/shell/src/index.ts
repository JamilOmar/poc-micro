import {ApplicationConfig, ShellApplication} from './application';
export * from './application';
require('dotenv').config();
const config = require('config');
export async function main(options: ApplicationConfig = {}) {
  const app = new ShellApplication(options);
  await app.boot();
  await app.start();

  const url = app.restServer.url;
  console.log(`Server is running at ${url}`);
  console.log(`Try ${url}/ping`);

  return app;
}

if (require.main === module) {
  main(config).catch(err => {
    console.error('Cannot start the application.', err);
    process.exit(1);
  });
}
