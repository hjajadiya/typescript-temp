import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreDocument,
  AngularFirestoreCollection,
  DocumentChangeAction,
  Action,
  DocumentSnapshotDoesNotExist,
  DocumentSnapshotExists,
} from '@angular/fire/firestore';
import { Observable, from } from 'rxjs';
import { map, tap, take, switchMap, mergeMap, expand, takeWhile } from 'rxjs/operators';

import * as firebase from 'firebase/app';
import { Employee } from './employee.model';



@Injectable({
  providedIn: 'root',
})
export class FirestoreService {
  constructor(private firestore: AngularFirestore) {
   
  }
 
  gettEmployee() {
    return this.firestore.doc('totalCount/employees');
  }

getEmployee() {
    return this.firestore.collection('employees').snapshotChanges();
  }
  
  createEmployee(employee: Employee){
   
    
    return this.firestore.collection('employees').add(employee);
 
 
}
updateEmployee(employee: Employee){
  delete employee.id;
  this.firestore.doc('employees/' + employee.id).update(employee);
}
deleteEmployee(employeeId: string){
  this.firestore.doc('employees/' + employeeId).delete();
}
}