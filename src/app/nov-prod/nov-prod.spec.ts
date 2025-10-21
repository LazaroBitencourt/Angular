import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovProd } from './nov-prod';

describe('NovProd', () => {
  let component: NovProd;
  let fixture: ComponentFixture<NovProd>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NovProd]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NovProd);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
