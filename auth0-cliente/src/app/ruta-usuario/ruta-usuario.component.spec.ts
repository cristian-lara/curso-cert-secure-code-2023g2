import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaUsuarioComponent } from './ruta-usuario.component';

describe('RutaUsuarioComponent', () => {
  let component: RutaUsuarioComponent;
  let fixture: ComponentFixture<RutaUsuarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RutaUsuarioComponent]
    });
    fixture = TestBed.createComponent(RutaUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
