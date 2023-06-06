import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppiGoogleMapsComponent } from './appi-google-maps.component';

describe('AppiGoogleMapsComponent', () => {
  let component: AppiGoogleMapsComponent;
  let fixture: ComponentFixture<AppiGoogleMapsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppiGoogleMapsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppiGoogleMapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
