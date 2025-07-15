import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimerArticuloComponent } from './primer-articulo.component';

describe('PrimerArticuloComponent', () => {
  let component: PrimerArticuloComponent;
  let fixture: ComponentFixture<PrimerArticuloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrimerArticuloComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrimerArticuloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
