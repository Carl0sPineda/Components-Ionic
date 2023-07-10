import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from 'src/app/components/components.module';

@Component({
  selector: 'app-item-groud',
  templateUrl: './item-groud.page.html',
  styleUrls: ['./item-groud.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterModule, ComponentsModule]
})
export class ItemGroudPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
