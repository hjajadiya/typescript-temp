import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirestoreComponent } from './firestore/firestore.component';
import { HomeComponent } from './home/home.component';
import { FireauthComponent } from './fireauth/fireauth.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';

const routes: Routes = [  
 { path: 'firestore', component: FirestoreComponent},
 { path: 'home', component: HomeComponent},
 { path: 'login', component: FireauthComponent},
 { path: 'addemp', component: AddEmployeeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
