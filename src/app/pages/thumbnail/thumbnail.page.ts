import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from 'src/app/components/components.module';


@Component({
  selector: 'app-thumbnail',
  templateUrl: './thumbnail.page.html',
  styleUrls: ['./thumbnail.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterModule, ComponentsModule]
})
export class ThumbnailPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
