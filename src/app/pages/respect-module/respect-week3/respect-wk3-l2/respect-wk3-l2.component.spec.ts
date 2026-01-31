import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RespectWk3L2Component } from './respect-wk3-l2.component';

describe('RespectWk3L2Component', () => {
  let component: RespectWk3L2Component;
  let fixture: ComponentFixture<RespectWk3L2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RespectWk3L2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RespectWk3L2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
