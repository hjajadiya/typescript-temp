

import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { FirestoreService } from '../firestore.service';
import { Employee, Totals } from '../employee.model';
import { FormGroup, FormControl } from '@angular/forms';
import { firestore } from 'firebase';

@Component({
  selector: 'app-firestore',
  templateUrl: './firestore.component.html',
  styleUrls: ['./firestore.component.css']
})
// export class FirestoreComponent {
//   employees: Observable<any[]>;
//   constructor(db: AngularFirestore) {
//     this.employees = db.collection('totalCount').valueChanges();
//   }
// }

export class FirestoreComponent implements OnInit {

    employees: Employee[];
    
    profileForm = new FormGroup({
      idinput: new FormControl(''),
      firstName: new FormControl(''),
      lastName: new FormControl(''),
    });
  constructor(private employeeService: FirestoreService) { 
  
    }

  ngOnInit() {
    
  }
  onSubmit(){
    console.warn(this.profileForm.value);
  }

  create(employee: Employee){
      this.employeeService.createEmployee(employee);
  }

  update(employee: Employee) {
    this.employeeService.updateEmployee(employee);
  }

  delete(id: string) {
    this.employeeService.deleteEmployee(id);
  }
}