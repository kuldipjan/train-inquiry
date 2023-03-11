import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainbwstationComponent } from './trainbwstation.component';

describe('TrainbwstationComponent', () => {
  let component: TrainbwstationComponent;
  let fixture: ComponentFixture<TrainbwstationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainbwstationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainbwstationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
