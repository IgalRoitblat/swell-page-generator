import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailableWidgetComponent } from './available-widget.component';

describe('AvailableWidgetComponent', () => {
  let component: AvailableWidgetComponent;
  let fixture: ComponentFixture<AvailableWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvailableWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvailableWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
