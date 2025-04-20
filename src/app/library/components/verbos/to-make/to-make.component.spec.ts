import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToMakeComponent } from './to-make.component';

describe('ToMakeComponent', () => {
  let component: ToMakeComponent;
  let fixture: ComponentFixture<ToMakeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToMakeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToMakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
