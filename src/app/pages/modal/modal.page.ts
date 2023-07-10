import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule,IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from 'src/app/components/components.module';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterModule, ComponentsModule]
})
export class ModalPage implements OnInit {

  @ViewChild(IonModal) modal: IonModal | undefined;;

  message = 'Una vez des click al boton se abrira la ventana modal emergente';
  name: string;

  cancel() {
    this.modal?.dismiss(null, 'cancelar');
  }

  confirm() {
    this.modal?.dismiss(this.name, 'confirmar');
  }

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirmar') {
      this.message = `Bienvenido, ${ev.detail.data}!`;
    }
  }

  constructor() {
    this.name= "";
   }

  ngOnInit() {
  }

}
