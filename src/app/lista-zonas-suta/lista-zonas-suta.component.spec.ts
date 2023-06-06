import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaZonasSutaComponent } from './lista-zonas-suta.component';

describe('ListaZonasSutaComponent', () => {
  let component: ListaZonasSutaComponent;
  let fixture: ComponentFixture<ListaZonasSutaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaZonasSutaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaZonasSutaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
