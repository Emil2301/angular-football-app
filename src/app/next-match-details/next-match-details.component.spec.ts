import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NextMatchDetailsComponent } from './next-match-details.component';

describe('NextMatchDetailsComponent', () => {
  let component: NextMatchDetailsComponent;
  let fixture: ComponentFixture<NextMatchDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NextMatchDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NextMatchDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
