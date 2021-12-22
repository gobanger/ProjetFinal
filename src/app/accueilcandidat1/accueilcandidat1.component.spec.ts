import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Accueilcandidat1Component } from './accueilcandidat1.component';

describe('Accueilcandidat1Component', () => {
  let component: Accueilcandidat1Component;
  let fixture: ComponentFixture<Accueilcandidat1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Accueilcandidat1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Accueilcandidat1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
