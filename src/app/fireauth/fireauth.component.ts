import { Component} from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { AngularFireAuthGuard } from '@angular/fire/auth-guard';

@Component({
  selector: 'app-fireauth',
  templateUrl: './fireauth.component.html',
  styleUrls: ['./fireauth.component.css']
})
export class FireauthComponent{

  constructor(public afAuth: AngularFireAuth) {
  }
  login() {
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }
  logout() {
    this.afAuth.auth.signOut();
  }
}
