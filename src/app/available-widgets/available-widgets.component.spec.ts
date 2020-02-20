import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailableWidgetsComponent } from './available-widgets.component';

describe('AvailableWidgetsComponent', () => {
  let component: AvailableWidgetsComponent;
  let fixture: ComponentFixture<AvailableWidgetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvailableWidgetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvailableWidgetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
