import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'Shell',
  connector: 'memory',
  localStorage: 'n',
  file: ''
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
let singletonInstance: any | null = null;
@lifeCycleObserver('datasource')
export class ShellDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'Shell';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.Shell', {optional: true})
    dsConfig: object = config,
  ) {
    if (singletonInstance) {
      return singletonInstance;
    }
    super(dsConfig);
    singletonInstance = this;
  }
}
