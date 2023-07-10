import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddComponent } from './component/add/add.component';

import {MatSelectModule} from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IfDirective } from './if.directive';
import { ContactTableComponent } from './contact-table/contact-table.component';
import { HomeComponent } from './home/home.component';
import { ContactDataComponent } from './component/contact-data/contact-data.component';
import { ErrorComponent } from './error/error.component';
//import { MyserviceComponent } from './myservice/myservice.component';




@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    IfDirective,
    ContactTableComponent,
    HomeComponent,
    ContactDataComponent,
    ErrorComponent,
   // MyserviceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
