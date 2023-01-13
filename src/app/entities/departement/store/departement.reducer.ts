import {DepartementModel} from "./departement.model";
import {createReducer, on} from "@ngrx/store";
import {departementFetchAPISuccess} from "./departement.action";

export const initialState:ReadonlyArray<DepartementModel>=[];
export const departementReducer=createReducer(
  initialState,
  on(departementFetchAPISuccess,(state,{allDepartements})=>{
    return allDepartements;
  })
)
