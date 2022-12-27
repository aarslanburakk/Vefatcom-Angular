import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeadsModule } from './deads/deads.module';
import { HomeModule } from './home/home.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DeadsModule,
    HomeModule
  ]
})
export class ComponentsModule { }
