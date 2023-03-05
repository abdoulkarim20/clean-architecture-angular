import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {map, Observable} from "rxjs";
import {DepartementState, DepartementStateEnum} from "../../ngrx/departement.reducer";

@Component({
  selector: 'app-liste-test-ngrx',
  templateUrl: './liste-test-ngrx.component.html',
  styleUrls: ['./liste-test-ngrx.component.css']
})
export class ListeTestNgrxComponent implements OnInit{
  departements$:Observable<DepartementState>|null=null;

  readonly departementStateEnum=DepartementStateEnum
  constructor(private store:Store<any>) {
  }
  ngOnInit(): void {
    this.departements$=this.store.pipe(
      map((state)=>state.departementState)
    )
  }
}
