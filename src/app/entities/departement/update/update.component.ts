import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {DepartementService} from "../departement.service";
import {Store} from "@ngrx/store";
import {invokSaveDepartementAPI} from "../store/departement.action";

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit{
  constructor(
    private formBuilder:FormBuilder,
    private departementService:DepartementService,
    private store:Store
  ) {
  }
  ngOnInit():void {
  }
  save(){
    //this.store.dispatch(invokSaveDepartementAPI({departement:{...this.saveDepartement}}));
   /* let departement=this.saveDepartement.value;
    console.log(departement);
    this.saveDepartement.reset({});
    this.departementService.saveDepartement(departement).subscribe({
      next:(res)=>{
        console.log('success');
      },
      error:(err)=>{
        console.log('error')
      }
    });*/
  }
  saveDepartement=this.formBuilder.group({
    libelle:["",Validators.required]
  })
}
