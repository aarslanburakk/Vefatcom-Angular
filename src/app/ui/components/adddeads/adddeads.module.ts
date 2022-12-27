import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdddeadsComponent } from './adddeads.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AdddeadsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{path:"",component:AdddeadsComponent}])
  ]
})
export class AdddeadsModule { }
