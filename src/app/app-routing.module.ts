import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';


const routes: Routes = [
  
  {path:'home',component:HomeComponent},
  {path:'detail/:id',component:DetailComponent},
  {path:'',redirectTo:'home',pathMatch:"full"},
  {path:'cart',component:CartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
