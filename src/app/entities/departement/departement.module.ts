import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepartementRoutingModule } from './departement-routing.module';
import { ListComponent } from './list/list.component';
import { UpdateComponent } from './update/update.component';


@NgModule({
  declarations: [
    ListComponent,
    UpdateComponent
  ],
  imports: [
    CommonModule,
    DepartementRoutingModule
  ]
})
export class DepartementModule { }
