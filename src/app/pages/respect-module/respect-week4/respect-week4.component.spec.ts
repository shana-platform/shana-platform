import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RespectWeek4Component } from './respect-week4.component';

describe('RespectWeek4Component', () => {
  let component: RespectWeek4Component;
  let fixture: ComponentFixture<RespectWeek4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RespectWeek4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RespectWeek4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
