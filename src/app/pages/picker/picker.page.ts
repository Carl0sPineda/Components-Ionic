import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule,PickerController } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from 'src/app/components/components.module';


@Component({
  selector: 'app-picker',
  templateUrl: './picker.page.html',
  styleUrls: ['./picker.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterModule, ComponentsModule]
})
export class PickerPage implements OnInit {

  selectedOption: string =""; // Variable para almacenar la selección

  constructor(private pickerController: PickerController) { }

  ngOnInit() {
  }

  pickerColumns: any[] = [
    // Define tus columnas aquí
    // Por ejemplo:
    {
      name: 'column1',
      options: [
        { text: 'React native', value: 'react-native' },
        { text: 'Ionic', value: 'ionic' },
        { text: 'Flutter', value: 'flutter' }
      ]
    }
  ];

  async openPicker() {
    const picker = await this.pickerController.create({
      columns: this.pickerColumns,
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        },
        {
          text: 'Aceptar',
          handler: (value) => {
            this.selectedOption = value.column1.text; // Actualiza la selección
          }
        }
      ]
    });

    await picker.present();
  }
}
