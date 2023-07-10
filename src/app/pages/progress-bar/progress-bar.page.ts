import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from 'src/app/components/components.module';


@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.page.html',
  styleUrls: ['./progress-bar.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterModule, ComponentsModule]
})
export class ProgressBarPage implements OnInit {

  public progress = 0;
  public progressPercentage = 0;
  
  constructor() {
  setInterval(() => {
    this.progress += 0.01;
    this.progressPercentage = Math.floor(this.progress * 100);

    if (this.progress > 1) {
      setTimeout(() => {
        this.progress = 0;
        this.progressPercentage = 0;
      }, 1000);
    }
  }, 50);
}

  ngOnInit() {
  }

}
