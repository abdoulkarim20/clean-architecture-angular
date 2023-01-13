import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'departement',
    loadChildren: () => import('./departement/departement.module').then(module=>module.DepartementModule)
  },
  {
    path:'etudiant',
    loadChildren:()=>import('./etudiant/etudiant.module').then(module=>module.EtudiantModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class EntityRoutingModule { }
