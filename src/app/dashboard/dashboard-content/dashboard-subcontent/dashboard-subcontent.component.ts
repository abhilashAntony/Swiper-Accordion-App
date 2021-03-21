import { Component, Input, OnInit } from '@angular/core';
import { ConfigService } from '../../../config.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-dashboard-subcontent',
  templateUrl: './dashboard-subcontent.component.html',
  styleUrls: ['./dashboard-subcontent.component.css']
})
export class DashboardSubcontentComponent implements OnInit {
  snackbarMessage: string;
  @Input() mainStack;
  constructor(private configService: ConfigService, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  // Controls the functionality of the start button
  updateStartButton(server): void {
    if (server.startButton === 'enabled') {
      server.startButton = 'disabled';
      server.stopButton = 'enabled';
      const returnData = (this.configService.postConfig({action: 'start', id: server.id})
      .subscribe((response: any) => {
        console.log(response);
      }));
    }
  }

  // Controls the functionality of the stop button
  updateStopButton(server): void {
    if (server.stopButton === 'enabled') {
      server.stopButton = 'disabled';
      server.startButton = 'enabled';
      const returnData = (this.configService.postConfig({action: 'stop', id: server.id})
      .subscribe((response: any) => {
        console.log(response);
      }));
    }
  }

  // Function for displaying the snackbar
  openSnackBar(message: string, serverName: string): void {
    this.snackbarMessage = serverName + ' ' + message;
    this.snackBar.open(this.snackbarMessage, 'Dismiss', {
      duration: 2000
    });
  }
}
