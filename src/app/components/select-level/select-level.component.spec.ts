import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectLevelComponent } from './select-level.component';

describe('SelectLevelComponent', () => {
  let component: SelectLevelComponent;
  let fixture: ComponentFixture<SelectLevelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelectLevelComponent]
    });
    fixture = TestBed.createComponent(SelectLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
