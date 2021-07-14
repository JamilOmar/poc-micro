import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { ListComponent } from './list/list.component';
import { EditComponent } from './edit/edit.component';
import { AgGridModule } from 'ag-grid-angular';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [
    AdminComponent,
    ListComponent,
    EditComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatButtonModule,
    MatButtonToggleModule,
    ReactiveFormsModule,
    RouterModule,
    AgGridModule.withComponents([]),
    FormlyModule.forChild({ extras: { lazyRender: true } }),
    FormlyMaterialModule,

  ]
})
export class AdminModule { }
