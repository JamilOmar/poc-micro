import {Entity, model, property} from '@loopback/repository';

@model()
export class Modules extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'string',
    required: true,
  })
  remote: string;

  @property({
    type: 'string',
    required: true,
  })
  module: string;

  @property({
    type: 'string',
    required: true,
  })
  path: string;

  @property({
    type: 'string',
    required: true,
  })
  url: string;

  constructor(data?: Partial<Modules>) {
    super(data);
  }
}

export interface ModulesRelations {
  // describe navigational properties here
}

export type ModulesWithRelations = Modules & ModulesRelations;
