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
import {ReactiveFormsModule} from "@angular/forms";
import { ListeTestNgrxComponent } from './liste-test-ngrx/liste-test-ngrx.component';


@NgModule({
  declarations: [
    ListComponent,
    UpdateComponent,
    ListeTestNgrxComponent
  ],
  imports: [
    CommonModule,
    DepartementRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    StoreModule.forFeature("myDepartements",departementReducer),
    EffectsModule.forFeature([DepartementEffects])
  ]
})
export class DepartementModule { }
