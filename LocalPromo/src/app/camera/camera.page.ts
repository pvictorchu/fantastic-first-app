import { Component, OnInit } from '@angular/core';
import { CameraPreview, CameraPreviewPictureOptions, CameraPreviewOptions, CameraPreviewDimensions } from '@ionic-native/camera-preview/ngx';
@Component({
  selector: 'app-camera',
  templateUrl: './camera.page.html',
  styleUrls: ['./camera.page.scss'],
})
export class CameraPage implements OnInit {
 
  constructor(private cameraPreview : CameraPreview) {
    this.startCamera();
  }
  ngOnInit() {
    this.startCamera();
  }
  startCamera(){

    try{
      this.cameraPreview.stopCamera().then(() =>{
        console.log("camera started")

      }).catch(e =>{
        console.log("camera error")
      });
    }catch(e) {

    }
    // start camera
    this.cameraPreview.startCamera({x: 0, y: 0, width:window.screen.width, height: window.screen.height, toBack: true, previewDrag: false, tapPhoto: true});

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StoryPhotoPage');
  }

}

  

