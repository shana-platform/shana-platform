import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RespectWk4L2Component } from './respect-wk4-l2.component';

describe('RespectWk4L2Component', () => {
  let component: RespectWk4L2Component;
  let fixture: ComponentFixture<RespectWk4L2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RespectWk4L2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RespectWk4L2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
