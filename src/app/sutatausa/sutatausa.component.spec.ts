import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SutatausaComponent } from './sutatausa.component';

describe('SutatausaComponent', () => {
  let component: SutatausaComponent;
  let fixture: ComponentFixture<SutatausaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SutatausaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SutatausaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
