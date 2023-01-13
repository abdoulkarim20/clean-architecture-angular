import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EtudiantRoutingModule } from './etudiant-routing.module';
import { UpdateComponent } from './update/update.component';
import { ListComponent } from './list/list.component';


@NgModule({
  declarations: [
    UpdateComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    EtudiantRoutingModule
  ]
})
export class EtudiantModule { }
