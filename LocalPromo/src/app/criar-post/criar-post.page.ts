import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../compartilhado/authentication-service';

import { Router } from '@angular/router';

import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-criar-post',
  templateUrl: './criar-post.page.html',
  styleUrls: ['./criar-post.page.scss'],
})

export class CriarPostPage implements OnInit {
  currentUser: any;

  public newPhoto = {
    comment: [],
    comment_count: 0,
    description: "",
    id: 124,
    liked:false,
    originalid: "",
    photo_url: "https://www.oetker.com.br/Recipe/Recipes/oetker.com.br/br-pt/baking/image-thumb__40008__RecipeDetailsLightBox/bolo-de-aniversario-de-chocolate.jpg",
    place: "São Paulo - SP",
    user: null
  }

  constructor(private auth: AuthenticationService, private db: AngularFirestore, private router: Router) { }

  ngOnInit() {
    this.currentUser = this.auth.GetCurrentUserData();
  }

  EnviarNovoPost() {
    this.newPhoto.user = {
      uid: this.currentUser.uid,
      name: this.currentUser.displayName,
      photo_url: this.currentUser.photoURL,
    };
    this.db.collection(`feed`).add(this.newPhoto).then(e => {
      this.newPhoto.originalid = e.id;
      this.db.collection(`feed`).doc(this.newPhoto.originalid).update(this.newPhoto)
    });
    this.router.navigate(["feed"]);
  }

}
