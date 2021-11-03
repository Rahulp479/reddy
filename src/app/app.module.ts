import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeDashboardComponent } from './components/employee-dashboard/employee-dashboard.component';
import { ReactiveFormsModule, FormGroup } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    EmployeeDashboardComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
