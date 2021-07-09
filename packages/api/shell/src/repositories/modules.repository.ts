import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {ShellDataSource} from '../datasources';
import {Modules, ModulesRelations} from '../models';

export class ModulesRepository extends DefaultCrudRepository<
  Modules,
  typeof Modules.prototype.id,
  ModulesRelations
> {
  constructor(
    @inject('datasources.Shell') dataSource: ShellDataSource,
  ) {
    super(Modules, dataSource);
  }
}
