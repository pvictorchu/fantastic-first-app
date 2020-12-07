import { Component, Input, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { User } from 'src/app/compartilhado/authentication-service';

export interface Photo {
  id: any;
  originalid: string;
  liked: boolean;
  description: string;
  comment_count: number;
  comment: Comment[];
  place: string;
  user: {
    uid: string;
    id: number;
    name: string;
    photo_url: string;
  };
}

export interface Comment {
  autor: string;
  uid: string;
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

  public currentUser: User;

  constructor(private db: AngularFirestore) { }

  ngOnInit() {
    this.currentUser = JSON.parse(localStorage.getItem('user'));
    this.db.doc<User>(`users/${this.currentUser.uid}`).get().subscribe(e => this.currentUser = e.data());
    console.log(this.currentUser);
  }

  public input: string;

  novoComentario(input: string) {
    if (input?.length > 1) {

      const newComment: Comment = {
        autor: this.currentUser.displayName,
        uid: this.currentUser.uid,
        id: 5,
        message: input,
        photo_url: this.currentUser.photoURL
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
  }

  apagarComentario(input: Comment) {
    if (this.photo.user.uid == this.currentUser.uid || input.uid == this.currentUser.uid) {

      const index = this.photo.comment.indexOf(input, 0);
      console.log(index)
      if (index > -1) {
        this.photo.comment.splice(index, 1);

        this.photo.comment_count = this.photo.comment.length;
        this.db.collection('/feed/').doc<Photo>(this.photo.originalid).update(this.photo);
      }

      console.log(input);
    }
  }
}


  // .update({comment: [{autor: "Teste", id: 3, message : input, photo_url: this.photo.user.photo_url}]})