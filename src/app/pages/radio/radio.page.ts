import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from 'src/app/components/components.module';


@Component({
  selector: 'app-radio',
  templateUrl: './radio.page.html',
  styleUrls: ['./radio.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterModule, ComponentsModule]
})
export class RadioPage implements OnInit {

  public selected: string = '';

  constructor() { }

  ngOnInit() {
  }
  
  onSelect(event: any) {
    this.selected = event.detail.value;
  }

}
