import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RespectWk4L1Component } from './respect-wk4-l1.component';

describe('RespectWk4L1Component', () => {
  let component: RespectWk4L1Component;
  let fixture: ComponentFixture<RespectWk4L1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RespectWk4L1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RespectWk4L1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
