import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RespectWk1L1Component } from './respect-wk1-l1.component';

describe('RespectWk1L1Component', () => {
  let component: RespectWk1L1Component;
  let fixture: ComponentFixture<RespectWk1L1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RespectWk1L1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RespectWk1L1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
