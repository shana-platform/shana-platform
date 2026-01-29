import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RespectWk2L1Component } from './respect-wk2-l1.component';

describe('RespectWk2L1Component', () => {
  let component: RespectWk2L1Component;
  let fixture: ComponentFixture<RespectWk2L1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RespectWk2L1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RespectWk2L1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
