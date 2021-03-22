import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PanelSelectorService {
  private slideIndex = new BehaviorSubject(0);
  currentSlideIndex = this.slideIndex.asObservable();
  private serviceSlideChange: () => void;
  constructor() { }

  changeSlideIndex(index: number) {
    this.slideIndex.next(index);
    this.serviceSlideChange();
    console.log(index);
  }

  onSlideIndexChange(fn: () => void) {
    this.serviceSlideChange = fn;
  }
}
