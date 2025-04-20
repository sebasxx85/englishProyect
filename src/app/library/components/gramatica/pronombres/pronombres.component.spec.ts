import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PronombresComponent } from './pronombres.component';

describe('PronombresComponent', () => {
  let component: PronombresComponent;
  let fixture: ComponentFixture<PronombresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PronombresComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PronombresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
