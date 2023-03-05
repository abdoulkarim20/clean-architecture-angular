import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from "@angular/common/http";
import {DepartementModel} from "./store/departement.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DepartementService {
  constructor(private http:HttpClient) { }
  getAllDepartement():Observable<DepartementModel[]>{
    return this.http.get<DepartementModel[]>('http://localhost:8080/api/departements')
  }
  saveDepartement(departement:DepartementModel):Observable<DepartementModel>{
    return this.http.post<DepartementModel>('http://localhost:8080/api/departements',departement);
  }
}
