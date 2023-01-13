import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepartementRoutingModule } from './departement-routing.module';
import { ListComponent } from './list/list.component';
import { UpdateComponent } from './update/update.component';
import {StoreModule} from "@ngrx/store";
import {departementReducer} from "./store/departement.reducer";
import {EffectsModule} from "@ngrx/effects";
import {DepartementEffects} from "./store/departement.effects";
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    ListComponent,
    UpdateComponent
  ],
  imports: [
    CommonModule,
    DepartementRoutingModule,
    HttpClientModule,
    StoreModule.forFeature("myDepartements",departementReducer),
    EffectsModule.forFeature([DepartementEffects])
  ]
})
export class DepartementModule { }
