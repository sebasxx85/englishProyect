import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresenteSimpleComponent } from './presente-simple.component';

describe('PresenteSimpleComponent', () => {
  let component: PresenteSimpleComponent;
  let fixture: ComponentFixture<PresenteSimpleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PresenteSimpleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PresenteSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
