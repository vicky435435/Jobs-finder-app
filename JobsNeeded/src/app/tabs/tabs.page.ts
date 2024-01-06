import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { IonIcon, IonTabBar, IonTabButton, IonTabs } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {chatboxEllipsesOutline, heartOutline, homeOutline, personOutline} from 'ionicons/icons'

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
  standalone: true,
  imports: [ IonTabs, IonTabBar, IonTabButton, IonIcon]
})
export class TabsPage implements OnInit {

  constructor() {
    addIcons({ homeOutline, personOutline, heartOutline, chatboxEllipsesOutline})
   }

  ngOnInit() {
  }

}
