import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeadsComponent } from './deads.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    DeadsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{path:"",component:DeadsComponent}])
  ]
})
export class DeadsModule { }
