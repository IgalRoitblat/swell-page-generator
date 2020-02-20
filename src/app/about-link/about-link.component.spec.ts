import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutLinkComponent } from './about-link.component';

describe('AboutLinkComponent', () => {
  let component: AboutLinkComponent;
  let fixture: ComponentFixture<AboutLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
