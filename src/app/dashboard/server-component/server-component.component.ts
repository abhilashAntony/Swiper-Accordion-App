import { Component, Input, OnInit } from '@angular/core';
import { PanelServiceService } from '../panel-service.service';
import { PanelSelectorService } from '../panel-selector.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-server-component',
  templateUrl: './server-component.component.html',
  styleUrls: ['./server-component.component.css']
})
export class ServerComponentComponent implements OnInit {
  panelStatus = false;
  index: number;
  subscription: Subscription;
  @Input() mainStacks;
  constructor(private panelService: PanelServiceService,
              private panelSelector: PanelSelectorService) { }

  // Initialize panel status in panel-service
  ngOnInit(): void {
    this.panelService.currentPanelStatus.subscribe(status => this.panelStatus = status);
    this.subscription = this.panelSelector.currentSlideIndex.subscribe(index => this.index = index);
  }

  // Useless function. Must remove this later
  changePanelStatus(): void {
    this.panelService.changePanelStatus(!this.panelStatus);
  }

  // Function shows the corresponding panel selected from the sidenav
  changeSlideIndex(stackName: string): void {
    this.panelSelector.changeSlideIndex(Number(stackName.slice(5)) - 1);
  }
}
