import {createAction, props} from "@ngrx/store";
import {DepartementModel} from "./departement.model";

export const invokDepartementsAPI=createAction(
  "[Departement API] invoke departement fetch API"
)
export const departementFetchAPISuccess=createAction(
  "[Departement API] departement fetch API success",
  props<{allDepartements:DepartementModel[]}>()
)
