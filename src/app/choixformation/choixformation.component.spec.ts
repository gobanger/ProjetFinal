import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoixformationComponent } from './choixformation.component';

describe('ChoixformationComponent', () => {
  let component: ChoixformationComponent;
  let fixture: ComponentFixture<ChoixformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChoixformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoixformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
