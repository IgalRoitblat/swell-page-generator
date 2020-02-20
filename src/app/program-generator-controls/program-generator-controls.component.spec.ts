import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramGeneratorControlsComponent } from './program-generator-controls.component';

describe('ProgramGeneratorControlsComponent', () => {
  let component: ProgramGeneratorControlsComponent;
  let fixture: ComponentFixture<ProgramGeneratorControlsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgramGeneratorControlsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramGeneratorControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
