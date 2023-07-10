import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './component/add/add.component';
import { HomeComponent } from './home/home.component';
import { ViewComponent } from './view/view.component';
import { ErrorComponent } from './error/error.component';
//import { ViewComponent } from './view/view.component';

const routes: Routes = [
  {path:'', redirectTo:'/home', pathMatch:'full'},
 //{ path: "**", component: ErrorComponent },
  {path:'home' ,component:HomeComponent},
 {path:'contacts/:id', component:ViewComponent}

  //{path:'View' ,component:ViewComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
