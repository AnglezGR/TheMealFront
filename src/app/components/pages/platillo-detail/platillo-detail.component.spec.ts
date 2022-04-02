import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatilloDetailComponent } from './platillo-detail.component';

describe('PlatilloDetailComponent', () => {
  let component: PlatilloDetailComponent;
  let fixture: ComponentFixture<PlatilloDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlatilloDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlatilloDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
