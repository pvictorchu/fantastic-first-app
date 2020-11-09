import { Component, OnInit } from '@angular/core';
import { Photo } from 'src/app/components/photo-card/photo-card.component';
import { PhotosService, PhotosService2 } from 'src/app/services/photos.service';
import { AngularFirestore } from '@angular/fire/firestore';


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  public gridSize = 4;

  public photos: Photo[];

  constructor(private db: AngularFirestore) { }

  ngOnInit() {
    this.db.collection('/feed/', e => e.where("user.id", "==", 50)).valueChanges().subscribe(res => {
      this.photos = <Photo[]> res;
      console.log(res);
    })
  }

}
