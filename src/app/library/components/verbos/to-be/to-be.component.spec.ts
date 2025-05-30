import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToBeComponent } from './to-be.component';

describe('ToBeComponent', () => {
  let component: ToBeComponent;
  let fixture: ComponentFixture<ToBeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToBeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToBeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
