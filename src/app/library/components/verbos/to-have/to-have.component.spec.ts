import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToHaveComponent } from './to-have.component';

describe('ToHaveComponent', () => {
  let component: ToHaveComponent;
  let fixture: ComponentFixture<ToHaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToHaveComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToHaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
