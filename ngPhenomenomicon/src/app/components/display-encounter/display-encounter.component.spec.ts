import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayEncounterComponent } from './display-encounter.component';

describe('DisplayEncounterComponent', () => {
  let component: DisplayEncounterComponent;
  let fixture: ComponentFixture<DisplayEncounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayEncounterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayEncounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
