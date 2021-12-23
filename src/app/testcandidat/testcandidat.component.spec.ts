import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestcandidatComponent } from './testcandidat.component';

describe('TestcandidatComponent', () => {
  let component: TestcandidatComponent;
  let fixture: ComponentFixture<TestcandidatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestcandidatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestcandidatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
