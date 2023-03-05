import {DepartementModel} from "../departement/store/departement.model";
import {DepartementActionsTypes, DepartementsActions} from "./departement.actions";
import {Action} from "@ngrx/store";

export enum DepartementStateEnum{
  LOADING="Loading",
  LOADED="Loaded",
  SUCCESS="Success",
  ERROR="Error",
  INITIAL="Initial"
}
export interface DepartementState{
  departements:DepartementModel[],
  errorMessage:string,
  dataState:DepartementStateEnum
}
const initialState:DepartementState = {
  departements:[],
  errorMessage:"",
  dataState:DepartementStateEnum.INITIAL
}
export function departementReducer(state=initialState,action:Action):DepartementState {
  switch (action.type){
    case DepartementActionsTypes.GET_ALL_DEPARTEMENTS:
      return {...state,dataState:DepartementStateEnum.LOADING}
    case DepartementActionsTypes.GET_ALL_DEPARTEMENTS_SUCCESS:
      return {...state,dataState:DepartementStateEnum.LOADED,departements:(<DepartementsActions>action).payload}
    case DepartementActionsTypes.GET_ALL_DEPARTEMENTS_ERROR:
      return {...state,dataState:DepartementStateEnum.ERROR,errorMessage:(<DepartementsActions>action).payload}
    default : return {...state}
  }
}
