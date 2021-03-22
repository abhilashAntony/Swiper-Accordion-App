import { TestBed } from '@angular/core/testing';

import { PanelSelectorService } from './panel-selector.service';

describe('PanelSelectorService', () => {
  let service: PanelSelectorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PanelSelectorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
