import { Component, OnInit } from '@angular/core';
import { Photo } from 'src/app/components/photo-card/photo-card.component';
import { PhotosService, PhotosService2 } from 'src/app/services/photos.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthenticationService, User } from '../compartilhado/authentication-service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  public gridSize = 4;

  public photos: Photo[];
  public currentUser: User;

  constructor(private db: AngularFirestore, private auth: AuthenticationService, private router: Router) { }

  ngOnInit() {
    if (!this.auth.isLoggedIn)
      this.router.navigate(['home']);
    else {
      this.currentUser = JSON.parse(localStorage.getItem('user'));

      console.log(this.currentUser)

      this.db.collection('/feed/', e => e.where("user.uid", "==", this.currentUser.uid)).valueChanges().subscribe(res => {
        this.photos = <Photo[]>res;
        console.log(res);
      })


      // console.log(this.currentUser)
      // this.db.collection('/feed/', e => e.where("user.uid", "==", 50)).valueChanges().subscribe(res => {
      //   this.photos = <Photo[]>res;
      //   console.log(res);
      // })
    }
  }
}
