import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from 'src/app/components/components.module';


@Component({
  selector: 'app-date-time-picker',
  templateUrl: './date-time-picker.page.html',
  styleUrls: ['./date-time-picker.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterModule, ComponentsModule]
})
export class DateTimePickerPage implements OnInit {

  tiempoSeleccionado: string;

  mostrarTiempo(event: Event) {
    const customEvent = event as CustomEvent<any>;
    this.tiempoSeleccionado = customEvent.detail.value;
    console.log(this.tiempoSeleccionado);

  }
  

  constructor() {
    this.tiempoSeleccionado =""
   }

  ngOnInit() {
  }

}
