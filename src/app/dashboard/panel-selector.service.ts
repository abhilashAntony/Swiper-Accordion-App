import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PanelSelectorService {
  /* Variables to define shared service between
  server-component and dashboard-content components */
  private slideIndex = new BehaviorSubject(0);
  currentSlideIndex = this.slideIndex.asObservable();
  private serviceSlideChange: () => void;
  constructor() { }

  changeSlideIndex(index: number): void {
    this.slideIndex.next(index);
    this.serviceSlideChange();
    console.log(index);
  }

  /* Function initializes 'serviceSlideChange' varible of
  function type, with the 'slideToThis' function in
  the dashboard-content TypeScript file */
  onSlideIndexChange(slideToThisReference: () => void): void {
    this.serviceSlideChange = slideToThisReference;
  }
}
