import { Injectable, NgZone } from '@angular/core';
import * as firebase from 'firebase/app';
// import { User } from "/user";
import { Router } from "@angular/router";
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

export interface User {
    uid: string;
    email: string;
    displayName: string;
    photoURL: string;
    emailVerified: boolean;
  bio: string;
 }

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {
  userData: any;

  constructor(
    public afStore: AngularFirestore,
    public ngFireAuth: AngularFireAuth,
    public router: Router,  
    public ngZone: NgZone 
  ) {
    this.ngFireAuth.authState.subscribe(user => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user'));
      } else {
        localStorage.setItem('user', null);
        JSON.parse(localStorage.getItem('user'));
      }
    })
  }

  // Login in with email/password
  SignIn(email, password) {
    return this.ngFireAuth.signInWithEmailAndPassword(email, password)
  }

  // Register user with email/password

  async RegisterUser(email, password) {
    const algo = this.ngFireAuth.createUserWithEmailAndPassword(email, password).then(x => this.SetUserData(x.user))
    return algo
  }

  // Email verification when new user register
  SendVerificationMail() {
    //   this.ngFireAuth.currentUser.then((e) => e.sendEmailVerification().then)
    return this.ngFireAuth.currentUser.then(e => e.sendEmailVerification()

    .then(() => {
      this.router.navigate(['verify-email']);
    }))
  }

  // Recover password
  PasswordRecover(passwordResetEmail) {
    return this.ngFireAuth.sendPasswordResetEmail(passwordResetEmail)
    .then(() => {
      window.alert('Password reset email has been sent, please check your inbox.');
    }).catch((error) => {
      window.alert(error)
    })
  }

  // Returns true when user is looged in
  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return (user !== null) ? true : false;
  }

  // Returns true when user's email is verified
  get isEmailVerified(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return (user.emailVerified !== false) ? true : false;
  }


//   // Sign in with Gmail
//   GoogleAuth() {
//     return this.AuthLogin(new firebase.auth.GoogleAuthProvider());
//   }


  // Auth providers
  AuthLogin(provider) {
    return this.ngFireAuth.signInWithPopup(provider)
    .then((result) => {
       this.ngZone.run(() => {
          this.router.navigate(['dashboard']);
        })
      this.SetUserData(result.user);
    }).catch((error) => {
      window.alert(error)
    })
  }

  // Store user in localStorage
  async SetUserData(user) {
    const userRef: AngularFirestoreDocument<User> = this.afStore.doc(`users/${user.uid}`);

    userRef.get(user.uid).subscribe(e => {

      const userData = e.data() ??
      {
      uid: user.uid,
      email: user.email,
        displayName: '',
      photoURL: user.photoURL,
        emailVerified: user.emailVerified,
        bio: ''
      };

    return userRef.set(userData, {
      merge: true
    })
    })
  }

  // Sign-out 
  SignOut() {
    return this.ngFireAuth.signOut().then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['login']);
    })
  }

  GetCurrentUserData() {
    // this.afStore.doc(`users/${user.uid}`);
    console.log(this.afStore)
    return this.afStore.collection
  }

}