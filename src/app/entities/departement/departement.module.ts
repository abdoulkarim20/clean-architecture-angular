import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UpdateComponent} from "./update/update.component";
import {DepartementRoutingModule} from "./route/departement-routing.module";

@NgModule({
  declarations: [
    UpdateComponent
  ],
  imports: [
    CommonModule,
    DepartementRoutingModule
  ]
})
export class DepartementModule { }
