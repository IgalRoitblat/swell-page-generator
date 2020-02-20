import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseWidgetsComponent } from './choose-widgets.component';

describe('ChooseWidgetsComponent', () => {
  let component: ChooseWidgetsComponent;
  let fixture: ComponentFixture<ChooseWidgetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChooseWidgetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseWidgetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
