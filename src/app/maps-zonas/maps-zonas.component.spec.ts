import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapsZonasComponent } from './maps-zonas.component';

describe('MapsZonasComponent', () => {
  let component: MapsZonasComponent;
  let fixture: ComponentFixture<MapsZonasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapsZonasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapsZonasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
