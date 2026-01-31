import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RespectWeek3Component } from './respect-week3.component';

describe('RespectWeek3Component', () => {
  let component: RespectWeek3Component;
  let fixture: ComponentFixture<RespectWeek3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RespectWeek3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RespectWeek3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
