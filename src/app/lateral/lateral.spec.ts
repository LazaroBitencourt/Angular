import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lateral } from './lateral';

describe('Lateral', () => {
  let component: Lateral;
  let fixture: ComponentFixture<Lateral>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lateral]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Lateral);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
