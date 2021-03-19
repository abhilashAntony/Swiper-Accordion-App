import { Component, OnInit, Input, ViewChild, OnChanges } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { ConfigService } from '../config.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnChanges {
  // Stores values of API get request and the progress spinner status
  mainStacks: any;
  apiLoadedStatus: boolean;

  // ViewChild obtains access to the DOM element referenced by id 'drawer'
  @ViewChild('drawer', {static: false}) public drawer: MatDrawer;
  // Interact with parent app-component
  @Input() openDrawer: boolean;
  constructor(private configService: ConfigService) { }

  // Initializing the stack data from API call
  ngOnInit(): void {
    this.apiLoadedStatus = true;
    this.configService
        .getConfig()
        .subscribe((data: any) => {
          this.apiLoadedStatus = false;
          this.mainStacks = data;
        });
  }

  // Detect changes to openDrawer to toggle the drawer component
  ngOnChanges(): void {
    if (this.drawer !== undefined) {
      this.drawer.toggle();
    }
  }
}
