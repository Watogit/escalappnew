import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolBloquesComponent } from './sol-bloques.component';

describe('SolBloquesComponent', () => {
  let component: SolBloquesComponent;
  let fixture: ComponentFixture<SolBloquesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolBloquesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolBloquesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
