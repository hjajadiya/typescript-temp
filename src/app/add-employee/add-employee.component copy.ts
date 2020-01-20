import { Component} from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormControl } from '@angular/forms';

import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})



export class AddEmployeeComponent {
  
  employeeForm;

  constructor(  private formBuilder: FormBuilder, private firestore: AngularFirestore,) {
    this.employeeForm = this.formBuilder.group({
      firstname: '',
      lastname:'',
      phone:'',
      email:'',
      address: ''
    });

   }

   
   onReview(employeeData) {
    
    console.warn('Your data has been Reviewed', employeeData);
    this.employeeForm.reset();
   
  }

  
  onSubmit(employeeData) {
    
    
  }
}
