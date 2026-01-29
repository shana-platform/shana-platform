import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RespectWk2L2Component } from './respect-wk2-l2.component';

describe('RespectWk2L2Component', () => {
  let component: RespectWk2L2Component;
  let fixture: ComponentFixture<RespectWk2L2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RespectWk2L2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RespectWk2L2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
