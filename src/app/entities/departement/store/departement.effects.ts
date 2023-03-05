import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {DepartementService} from "../departement.service";
import {
  departementFetchAPISuccess,
  invokDepartementsAPI,
  invokSaveDepartementAPI,
  saveDepartementAPISuccess
} from "./departement.action";
import {map, switchMap} from "rxjs";
@Injectable()
export class DepartementEffects{
  constructor(private actions$:Actions, private departementService:DepartementService) {}
  loadAllDepartements$ = createEffect(():any =>
    this.actions$.pipe(
      ofType(invokDepartementsAPI),
      switchMap(()=> {
        return this.departementService
          .getAllDepartement()
          .pipe(map((data:any) => departementFetchAPISuccess({
              allDepartements:data.content
            })
          ));
      })
    )
  )
  saveDepartement$=createEffect(():any =>
    this.actions$.pipe(
      ofType(invokSaveDepartementAPI),
      switchMap((action)=>{
        return this.departementService
          .saveDepartement(action.departement)
          .pipe(map((data)=>saveDepartementAPISuccess({response:data})))
      })
    )
  )
}
