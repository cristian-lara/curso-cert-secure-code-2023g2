import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaDefaultComponent } from './ruta-default.component';

describe('RutaDefaultComponent', () => {
  let component: RutaDefaultComponent;
  let fixture: ComponentFixture<RutaDefaultComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RutaDefaultComponent]
    });
    fixture = TestBed.createComponent(RutaDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
