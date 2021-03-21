import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PanelServiceService {
  private panelStatus = new BehaviorSubject<boolean>(false);
  currentPanelStatus = this.panelStatus.asObservable();
  constructor() { }

  // Function changes the panel status
  changePanelStatus(status: boolean): void {
    this.panelStatus.next(status);
  }
}
