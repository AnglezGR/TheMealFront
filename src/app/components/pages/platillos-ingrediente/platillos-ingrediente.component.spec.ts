import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatillosIngredienteComponent } from './platillos-ingrediente.component';

describe('PlatillosIngredienteComponent', () => {
  let component: PlatillosIngredienteComponent;
  let fixture: ComponentFixture<PlatillosIngredienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlatillosIngredienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlatillosIngredienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
