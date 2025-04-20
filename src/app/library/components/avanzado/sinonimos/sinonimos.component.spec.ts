import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinonimosComponent } from './sinonimos.component';

describe('SinonimosComponent', () => {
  let component: SinonimosComponent;
  let fixture: ComponentFixture<SinonimosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SinonimosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SinonimosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
