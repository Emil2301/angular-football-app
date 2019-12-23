import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhenDoesHePlayComponent } from './when-does-he-play.component';

describe('WhenDoesHePlayComponent', () => {
  let component: WhenDoesHePlayComponent;
  let fixture: ComponentFixture<WhenDoesHePlayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhenDoesHePlayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhenDoesHePlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
