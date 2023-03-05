import {Injectable} from "@angular/core";
import {DepartementService} from "../departement/departement.service";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, map, mergeMap, Observable, of} from "rxjs";
import {Action} from "@ngrx/store";
import {
  DepartementActionsTypes,
  GetAllDepartementsActionError,
  GetAllDepartementsActionSuccess,
} from "./departement.actions";

@Injectable()
export class DepartementEffects{
  constructor(private departementService:DepartementService,
              private effectActions:Actions) {
  }
  getAllDepartementSuccessEffect:Observable<Action>=createEffect(
    ():any => this.effectActions.pipe(
      ofType(DepartementActionsTypes.GET_ALL_DEPARTEMENTS),
      mergeMap((action)=>{
        return this.departementService.getAllDepartement()
          .pipe(
            map((departements) => new GetAllDepartementsActionSuccess(departements)),
            catchError((error) => of(new GetAllDepartementsActionError(error.message)))
          )
      })
    )
  );

  /*getAllDepartementErrorEffect:Observable<Action>=createEffect(
    ()=>this.effectActions.pipe(
      ofType(DepartementActionsTypes.GET_ALL_DEPARTEMENTS),
      mergeMap((action)=>{
        return this.departementService.getAllDepartement()
          .pipe(
            map((departements) => new GetAllDepartementsActionSuccess(departements))
          )
      })
    )
  );*/
}
