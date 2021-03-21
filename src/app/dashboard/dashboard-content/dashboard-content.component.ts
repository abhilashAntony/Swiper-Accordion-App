import { Component, Input, OnInit } from '@angular/core';
import { PanelServiceService } from '../panel-service.service';
import { SwiperComponent } from 'swiper/angular';

import SwiperCore, {
  Navigation,
} from 'swiper/core';

SwiperCore.use([Navigation]);

@Component({
  selector: 'app-dashboard-content',
  templateUrl: './dashboard-content.component.html',
  styleUrls: ['./dashboard-content.component.css']
})
export class DashboardContentComponent implements OnInit {
  panelStatus = false;
  @Input() mainStacks;
  constructor(private panelService: PanelServiceService) { }

  // Initialize panel status in panel-service
  ngOnInit(): void {
    this.panelService.currentPanelStatus.subscribe(status => this.panelStatus = status);
  }
}
