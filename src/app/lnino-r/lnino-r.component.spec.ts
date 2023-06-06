import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LNinoRComponent } from './lnino-r.component';

describe('LNinoRComponent', () => {
  let component: LNinoRComponent;
  let fixture: ComponentFixture<LNinoRComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LNinoRComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LNinoRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
