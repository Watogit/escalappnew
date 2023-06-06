import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NinoRComponent } from './nino-r.component';

describe('NinoRComponent', () => {
  let component: NinoRComponent;
  let fixture: ComponentFixture<NinoRComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NinoRComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NinoRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
