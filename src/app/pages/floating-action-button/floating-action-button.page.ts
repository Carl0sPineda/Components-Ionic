import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from 'src/app/components/components.module';


@Component({
  selector: 'app-floating-action-button',
  templateUrl: './floating-action-button.page.html',
  styleUrls: ['./floating-action-button.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterModule, ComponentsModule]
})
export class FloatingActionButtonPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
