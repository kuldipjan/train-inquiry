import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivestationComponent } from './livestation.component';

describe('LivestationComponent', () => {
  let component: LivestationComponent;
  let fixture: ComponentFixture<LivestationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LivestationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LivestationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
