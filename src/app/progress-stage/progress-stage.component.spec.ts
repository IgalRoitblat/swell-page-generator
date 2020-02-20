import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressStageComponent } from './progress-stage.component';

describe('ProgressStageComponent', () => {
  let component: ProgressStageComponent;
  let fixture: ComponentFixture<ProgressStageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgressStageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressStageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
