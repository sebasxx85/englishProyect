import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AntonimosComponent } from './antonimos.component';

describe('AntonimosComponent', () => {
  let component: AntonimosComponent;
  let fixture: ComponentFixture<AntonimosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AntonimosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AntonimosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
