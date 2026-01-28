import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RespectWeek1Component } from './respect-week1.component';

describe('RespectWeek1Component', () => {
  let component: RespectWeek1Component;
  let fixture: ComponentFixture<RespectWeek1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RespectWeek1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RespectWeek1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
