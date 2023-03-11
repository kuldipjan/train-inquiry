import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpotyourtrainComponent } from './spotyourtrain.component';

describe('SpotyourtrainComponent', () => {
  let component: SpotyourtrainComponent;
  let fixture: ComponentFixture<SpotyourtrainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpotyourtrainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpotyourtrainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
