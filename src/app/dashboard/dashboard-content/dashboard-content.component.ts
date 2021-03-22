import { Component, Input, OnInit, SimpleChange, ViewChild } from '@angular/core';
import { PanelServiceService } from '../panel-service.service';
import { PanelSelectorService } from '../panel-selector.service';
import { Subscription } from 'rxjs';
import { SwiperComponent } from 'swiper/angular';

// Swiper module for navigation through panels
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
  index: number;
  subscription: Subscription;
  panelStatus = false;
  // Obtain input from parent dashboard component
  @Input() mainStacks;
  // Access swiper DOM element using ViewChild decorator
  @ViewChild('swiperSelector', { static: false }) swiperSelector: SwiperComponent;
  constructor(private panelService: PanelServiceService,
              private panelSelector: PanelSelectorService) { }

  // Initialize panel status in panel-service
  ngOnInit(): void {
    this.panelService.currentPanelStatus.subscribe(status => this.panelStatus = status);
    this.subscription = this.panelSelector.currentSlideIndex.subscribe(index => this.index = index);
    // To trigger the slideToThis function when the index value changes
    this.panelSelector.onSlideIndexChange(this.slideToThis.bind(this));
  }

  // Function controls which slide must be active on click
  slideToThis(): void {
    this.swiperSelector.swiperRef.slideToLoop(this.index);
  }
}
