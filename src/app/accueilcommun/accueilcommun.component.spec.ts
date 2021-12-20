import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccueilcommunComponent } from './accueilcommun.component';

describe('AccueilcommunComponent', () => {
  let component: AccueilcommunComponent;
  let fixture: ComponentFixture<AccueilcommunComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccueilcommunComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccueilcommunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
