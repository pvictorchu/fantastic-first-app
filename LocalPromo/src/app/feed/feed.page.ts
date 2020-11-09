import { Component, OnInit } from '@angular/core';
import { Photo } from 'src/app/components/photo-card/photo-card.component';
import { PhotosService, PhotosService2 } from 'src/app/services/photos.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { filter } from 'minimatch';


@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
})
export class FeedPage implements OnInit {

  public photos: Photo[] = [];

  constructor(private db: AngularFirestore) { }

  ngOnInit() {

    this.db.collection<Photo>('/feed/').snapshotChanges().subscribe(res => {
      console.log(res);
      res.forEach(c => {
        this.photos.push({originalid: c.payload.doc.id, ...c.payload.doc.data()});
      })
      // this.photos = <Photo[]> res.filter((e : Photo) => e.user.id != 50);
    })

  }

}
