import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToGetComponent } from './to-get.component';

describe('ToGetComponent', () => {
  let component: ToGetComponent;
  let fixture: ComponentFixture<ToGetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToGetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToGetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
