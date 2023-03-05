import {Component, OnInit} from '@angular/core';
import {select, Store} from "@ngrx/store";
import {selectDepartements} from "../store/departement.selector";
import {invokDepartementsAPI} from "../store/departement.action";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit{
  constructor(private store:Store) {
  }
  departements$=this.store.pipe(select(selectDepartements))
  ngOnInit(): void {
    this.store.dispatch(invokDepartementsAPI());
  }

}
