import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreposicionesComponent } from './preposiciones.component';

describe('PreposicionesComponent', () => {
  let component: PreposicionesComponent;
  let fixture: ComponentFixture<PreposicionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PreposicionesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreposicionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
