import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { AuthGuard } from './auth.guard';
import { ChildcomponentComponent } from './childcomponent/childcomponent.component';
import { ContactComponent } from './contact/contact.component';
import { AdminGuard } from './guards/admin.guard';
import { UnsavedChangesGuard } from './guards/unsaved-changes.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ProductComponent } from './product/product.component';
import { UserlistComponent } from './userlist/userlist.component';
// import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';



const routes:Routes=[{path:'home',component:HomeComponent,canActivateChild:[AdminGuard],
children:[
  {path:'child',component:ChildcomponentComponent}
]},
{path:'about',component:AboutComponent},
{path:'contact',component:ContactComponent},
{path:'list',component:UserlistComponent,canActivate:[AuthGuard]},
{path:'',component:HomeComponent},
{path:'product',component:ProductComponent,canDeactivate:[UnsavedChangesGuard]},
{path:'PagenotfoundComponent', component:PagenotfoundComponent},
{path:'login', component: LoginComponent},

// 
]


@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
