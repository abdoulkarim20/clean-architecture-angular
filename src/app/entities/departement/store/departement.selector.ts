import {createFeatureSelector} from "@ngrx/store";
import {DepartementModel} from "./departement.model";

export const selectDepartements=createFeatureSelector<DepartementModel[]>("myDepartements")
