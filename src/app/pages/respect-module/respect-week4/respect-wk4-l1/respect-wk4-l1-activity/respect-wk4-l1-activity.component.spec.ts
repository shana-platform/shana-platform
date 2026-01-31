import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RespectWk4L1ActivityComponent } from './respect-wk4-l1-activity.component';

describe('RespectWk4L1ActivityComponent', () => {
  let component: RespectWk4L1ActivityComponent;
  let fixture: ComponentFixture<RespectWk4L1ActivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RespectWk4L1ActivityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RespectWk4L1ActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
