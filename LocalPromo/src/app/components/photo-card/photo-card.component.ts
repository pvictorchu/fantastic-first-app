import { Component, Input, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

export interface Photo {
  id: number;
  originalid: string;
  liked: boolean;
  description: string;
  comment_count: number;
  comment: Comment[];
  place: string;
  user: {
    id: number;
    name: string;
    photo_url: string;
  };
}

export interface Comment {
  autor: string;
  message: string;
  photo_url: string;
  id: number;
}

@Component({
  selector: 'app-photo-card',
  templateUrl: './photo-card.component.html',
  styleUrls: ['./photo-card.component.scss'],
})
export class PhotoCardComponent implements OnInit {

  @Input() public photo: Photo;

  constructor(private db: AngularFirestore) { }

  ngOnInit() { }

  public input: string;

  novoComentario(input: string) {
    const newComment: Comment = {
      autor: this.photo.user.name,
      id: 5,
      message: input,
      photo_url: this.photo.user.photo_url
    };

    this.photo.comment.push(newComment);
    this.photo.comment_count = this.photo.comment.length;

    console.log(newComment);

    this.db.collection('/feed/').doc<Photo>(this.photo.originalid).update(this.photo);
    this.input = null;
    // this.db.collection<Photo>('/feed/', e => e.where("id", "==", this.photo.id)).snapshotChanges()
    //   .subscribe((res) => {
    //     let id = res[0].payload.doc.id;
    //   });
    // }
  }

  apagarComentario(input: Comment) {
    const index = this.photo.comment.indexOf(input, 0);
    if (index > 1) {
      this.photo.comment.splice(index, 1);

      this.photo.comment_count = this.photo.comment.length;
      this.db.collection('/feed/').doc<Photo>(this.photo.originalid).update(this.photo);
    }

    console.log(input);
  }
}


  // .update({comment: [{autor: "Teste", id: 3, message : input, photo_url: this.photo.user.photo_url}]})