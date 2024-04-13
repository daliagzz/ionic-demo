import { Component, OnInit, inject } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCardHeader, IonCard, IonCardTitle, IonCardSubtitle, IonCardContent, IonFooter, IonGrid, IonCol, IonRow, IonButton, IonAlert, IonItem, IonLabel, IonChip, IonAvatar, IonInput } from '@ionic/angular/standalone';
import { Personaje, PersonajeService } from '../personaje.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonInput, IonAvatar, IonChip, IonLabel, IonItem, IonAlert, IonButton, IonRow, IonCol, IonGrid, IonFooter, IonCardContent, IonCardSubtitle, IonCardTitle, IonCard, IonCardHeader, IonHeader, IonToolbar, IonTitle, IonContent],
})
export class HomePage implements OnInit {
  private readonly _personajes =inject(PersonajeService);
  personajes: Personaje[]= [];
  constructor() {}

  ngOnInit():void{
    this._personajes.cargar().subscribe(
      (listado) => {
        this.personajes=listado;

      }
    );

  }
}

cargarPorPagina(event: CustomEvent){
  const= paginaSeleccionada = event.detail.value;
  this.personajesService.cargar(paginaSeleccionada).subscribe
}
