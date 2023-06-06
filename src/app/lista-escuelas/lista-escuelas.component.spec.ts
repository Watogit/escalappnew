import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaEscuelasComponent } from './lista-escuelas.component';

describe('ListaEscuelasComponent', () => {
  let component: ListaEscuelasComponent;
  let fixture: ComponentFixture<ListaEscuelasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaEscuelasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaEscuelasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
