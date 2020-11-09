import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Photo } from 'src/app/components/photo-card/photo-card.component';
import { PhotosService, PhotosService2 } from 'src/app/services/photos.service';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-view',
  templateUrl: './view.page.html',
  styleUrls: ['./view.page.scss'],
})
export class ViewPage implements OnInit {

  public photo: Photo = {
    originalid: null,
    id: null,
    comment_count: null,
    comment: [{
      autor: null,
      id: null,
      message: null,
      photo_url: null,
    }],
    description: null,
    liked: null,
    place: null,
    user: null,
  };

  constructor(private route: ActivatedRoute, private db: AngularFirestore) { }

  async ngOnInit() {

    const id = +this.route.snapshot.paramMap.get('id');
    console.log(this.photo);
    this.db.collection('/feed/', e => e.where("id", "==", id)).valueChanges().subscribe((e: Photo[]) => { console.log(e); this.photo = e[0] });
  }

}
