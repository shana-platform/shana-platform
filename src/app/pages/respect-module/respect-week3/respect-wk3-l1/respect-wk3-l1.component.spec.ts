import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RespectWk3L1Component } from './respect-wk3-l1.component';

describe('RespectWk3L1Component', () => {
  let component: RespectWk3L1Component;
  let fixture: ComponentFixture<RespectWk3L1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RespectWk3L1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RespectWk3L1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
