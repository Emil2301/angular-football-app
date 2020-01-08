import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubNameAndLogoComponent } from './club-name-and-logo.component';

describe('ClubNameAndLogoComponent', () => {
  let component: ClubNameAndLogoComponent;
  let fixture: ComponentFixture<ClubNameAndLogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClubNameAndLogoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClubNameAndLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
