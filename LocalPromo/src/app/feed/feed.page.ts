import { Component, OnInit } from '@angular/core';
import { Photo } from 'src/app/components/photo-card/photo-card.component';
import { PhotosService, PhotosService2 } from 'src/app/services/photos.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { filter } from 'minimatch';
import { AuthenticationService } from '../compartilhado/authentication-service';
import { Router } from '@angular/router';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
})
export class FeedPage implements OnInit {

  public photos: Photo[] = [];
  imagem: any = null;
  
  private options: CameraOptions = {
    quality: 50,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  }
  constructor(private db: AngularFirestore, private auth: AuthenticationService, public router: Router,private camera: Camera) { }

  ngOnInit() {
    
    if (!this.auth.isLoggedIn)
    this.router.navigate(['home']);
    else {
      this.db.collection<Photo>('/feed/').snapshotChanges().subscribe(res => {
        this.photos = [];
        console.log(res);
        res.forEach(c => {
          this.photos.push({ originalid: c.payload.doc.id, ...c.payload.doc.data() });
        })
        // this.photos = <Photo[]> res.filter((e : Photo) => e.user.id != 50);
      })
    }

  }

  baterFoto() {
    this.camera.getPicture(this.options).then((imageData) => {
      this.imagem = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      alert('Ops!\nHouve um erro');
      console.log(err)
    });
  }

}
