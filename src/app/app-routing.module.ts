import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './admin/components/dashboard/dashboard.component';
import { LayoutComponent } from './admin/layout/layout.component';
import { HomeComponent } from './ui/components/home/home.component';

const routes: Routes = [

{path:"admin",component : LayoutComponent,children:[
  {path:"",component:DashboardComponent},
  {path:"deads",loadChildren :()=> import("./admin/components/deads/deads.module")
  .then(module => module.DeadsModule)},
  {path:"users",loadChildren :()=> import("./admin/components/users/users.module")
  .then(module => module.UsersModule)}
  
]},
{
  path:"", component:HomeComponent
},
{path:"deads",loadChildren :()=> import("./ui/components/deads/deads.module")
.then(module => module.DeadsModule)},
{path:"adddeads",loadChildren :()=> import("./ui/components/adddeads/adddeads.module")
.then(module => module.AdddeadsModule)} 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
