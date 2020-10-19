import { Component, OnInit } from '@angular/core';
import { Photo } from 'src/app/components/photo-card/photo-card.component';
import { PhotosService, PhotosService2 } from 'src/app/services/photos.service';


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  public gridSize = 4;

  public photos2: Photo[];

  constructor(private photoService: PhotosService2) { }

  ngOnInit() {
    this.photos2 = this.photoService.allPhotos();
  }

}
