import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoccandidatComponent } from './doccandidat.component';

describe('DoccandidatComponent', () => {
  let component: DoccandidatComponent;
  let fixture: ComponentFixture<DoccandidatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoccandidatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoccandidatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
