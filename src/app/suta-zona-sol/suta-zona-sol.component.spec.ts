import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SutaZonaSolComponent } from './suta-zona-sol.component';

describe('SutaZonaSolComponent', () => {
  let component: SutaZonaSolComponent;
  let fixture: ComponentFixture<SutaZonaSolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SutaZonaSolComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SutaZonaSolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
