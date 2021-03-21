import { Component, Input, OnInit } from '@angular/core';
import { PanelServiceService } from '../panel-service.service';

@Component({
  selector: 'app-server-component',
  templateUrl: './server-component.component.html',
  styleUrls: ['./server-component.component.css']
})
export class ServerComponentComponent implements OnInit {
  panelStatus = false;
  @Input() mainStacks;
  constructor(private panelService: PanelServiceService) { }

  // Initialize panel status in panel-service
  ngOnInit(): void {
    this.panelService.currentPanelStatus.subscribe(status => this.panelStatus = status);
  }

  // Function toggles the opening and closing of the panel
  changePanelStatus(): void {
    this.panelService.changePanelStatus(!this.panelStatus);
  }
}
