import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './Components/detail/detail.component';
import { HomeComponent } from './Components/home/home.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:':Country',component:DetailComponent}
  /*
  const routes: Routes = [ //first match wins strategy
    {path:'',component:MainLayoutComponent, children:[
      {path:'' , redirectTo:'/Home', pathMatch:'full' },  //Default path
      {path:'Home' , component: HomeComponent},
      {path:'Order/:pid' , component: ProductDetailsComponent},
      {path:'Orders/Add' , component: AddProductComponent },
      {path:'Order',component:RequistOrderComponent,canActivate:[AuthGuard]},
      {
        path: 'User', 
        loadChildren: () => import('src/app/components/user-module/user-module.module').then(m => m.UserModuleModule)
      }
  ]},
  {path:'Login',component: LoginComponent},
  {path:'Register',component: UserReactiveFormsComponent},
  {path:'**',component:NotFoundComponent} //wild card path (else)
];
*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
