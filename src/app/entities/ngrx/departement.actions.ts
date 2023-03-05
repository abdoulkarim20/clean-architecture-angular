import {Action} from "@ngrx/store";
import {DepartementModel} from "../departement/store/departement.model";

export enum DepartementActionsTypes{
  GET_ALL_DEPARTEMENTS="[Departements] Get All departements",
  GET_ALL_DEPARTEMENTS_SUCCESS="[Departements] Get All departements Success",
  GET_ALL_DEPARTEMENTS_ERROR="[Departements] Get All departements Error",
}
export class GetAllDepartementsAction implements Action{
  type: DepartementActionsTypes=DepartementActionsTypes.GET_ALL_DEPARTEMENTS;
  constructor(public payload:any) {
  }
}
export class GetAllDepartementsActionSuccess implements Action{
  type: DepartementActionsTypes=DepartementActionsTypes.GET_ALL_DEPARTEMENTS_SUCCESS;
  constructor(public payload:DepartementModel[]) {
  }
}

export class GetAllDepartementsActionError implements Action{
  type: DepartementActionsTypes=DepartementActionsTypes.GET_ALL_DEPARTEMENTS_ERROR;
  constructor(public payload:string) {
  }
}
export type DepartementsActions=
  GetAllDepartementsAction | GetAllDepartementsActionSuccess | GetAllDepartementsActionError
