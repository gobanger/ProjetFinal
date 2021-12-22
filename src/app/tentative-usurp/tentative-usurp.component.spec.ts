import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TentativeUsurpComponent } from './tentative-usurp.component';

describe('TentativeUsurpComponent', () => {
  let component: TentativeUsurpComponent;
  let fixture: ComponentFixture<TentativeUsurpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TentativeUsurpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TentativeUsurpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
