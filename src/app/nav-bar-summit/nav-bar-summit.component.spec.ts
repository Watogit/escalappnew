import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarSummitComponent } from './nav-bar-summit.component';

describe('NavBarSummitComponent', () => {
  let component: NavBarSummitComponent;
  let fixture: ComponentFixture<NavBarSummitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavBarSummitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavBarSummitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
