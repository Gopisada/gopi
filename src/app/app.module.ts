import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContactComponent } from './contact/contact.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { CustompipePipe } from './custompipe.pipe';
import { CustomdirectiveDirective } from './customdirective.directive'
import { MaterialModule } from './material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChildcomponentComponent } from './childcomponent/childcomponent.component';
import { MAT_DATE_LOCALE, MAT_DATE_LOCALE_FACTORY } from '@angular/material/core';
import { UserlistComponent } from './userlist/userlist.component';
import { HttpClientModule } from '@angular/common/http';
// import { HttpClient } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import { AuthGuard } from './auth.guard';
import { AdminGuard } from './guards/admin.guard';
import { MenuComponent } from './menu/menu.component';
import { CounterComponent } from './userlist/counter/counter.component';
import { ProductComponent } from './product/product.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    PagenotfoundComponent,
    CustompipePipe,
    CustomdirectiveDirective,
    ChildcomponentComponent,
    UserlistComponent,
    MenuComponent,
    CounterComponent,
    ProductComponent,
    LoginComponent
  
    
   
  ],
  imports: [
    
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule ,
     MaterialModule,
     FormsModule,
     HttpClientModule,
     MatTableModule,ReactiveFormsModule
        
  ],
  providers: [AuthGuard,AdminGuard],
  bootstrap: [AppComponent]
})
export class AppModule {
 
 }
