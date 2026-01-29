import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RespectWk1L2Component } from './respect-wk1-l2.component';

describe('RespectWk1L2Component', () => {
  let component: RespectWk1L2Component;
  let fixture: ComponentFixture<RespectWk1L2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RespectWk1L2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RespectWk1L2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
