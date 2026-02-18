import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonFab, IonFabButton, IonIcon, IonGrid, IonRow, IonCol, IonImg }  from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { FotoService } from '../services/foto.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonFab, IonFabButton, IonIcon, IonGrid, IonRow, IonCol, IonImg, ExploreContainerComponent, NgFor],
})
export class Tab1Page {
  constructor(public fotoService: FotoService) {}

  addPhotoToGallery()
  {
    this.fotoService.addNewToGallery()
  }

  async ngOnInit(){
    await this.fotoService.loadSaved()
  }
}
