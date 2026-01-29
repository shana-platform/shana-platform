import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RespectWeek2Component } from './respect-week2.component';

describe('RespectWeek2Component', () => {
  let component: RespectWeek2Component;
  let fixture: ComponentFixture<RespectWeek2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RespectWeek2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RespectWeek2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
