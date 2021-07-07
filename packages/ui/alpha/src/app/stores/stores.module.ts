import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoresRoutingModule } from './stores-routing.module';
import { StoresComponent } from './stores.component';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    StoresComponent
  ],
  imports: [
    CommonModule,
    StoresRoutingModule,
    ReactiveFormsModule,
    FormlyModule.forChild({ extras: { lazyRender: true } }),
    FormlyMaterialModule,
  ]
})
export class StoresModule { }
