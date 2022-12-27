import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeadsComponent } from './deads/deads.component';
import { DeadsModule } from './deads/deads.module';
import { UsersModule } from './users/users.module';
import { DashboardModule } from './dashboard/dashboard.module';




@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    DeadsModule,
    UsersModule,
    DashboardModule,
  
  ]
})
export class ComponentsModule { }
