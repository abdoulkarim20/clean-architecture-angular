import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {DepartementService} from "../departement.service";
import {departementFetchAPISuccess, invokDepartementsAPI} from "./departement.action";
import {map, switchMap} from "rxjs";
@Injectable()
export class DepartementEffects{
  constructor(private actions$:Actions, private departementService:DepartementService) {}
  loadAllDepartements$ = createEffect(()  => {
    this.actions$.pipe(
      ofType(invokDepartementsAPI),
      switchMap(() => {
        return this.departementService
          .getAllDepartement()
          .pipe(map((data)=>departementFetchAPISuccess({ allDepartements : data })))
      })
    )
  })
}
