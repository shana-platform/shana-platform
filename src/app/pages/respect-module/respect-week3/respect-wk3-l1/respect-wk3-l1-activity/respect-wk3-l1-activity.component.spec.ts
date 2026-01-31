import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RespectWk3L1ActivityComponent } from './respect-wk3-l1-activity.component';

describe('RespectWk3L1ActivityComponent', () => {
  let component: RespectWk3L1ActivityComponent;
  let fixture: ComponentFixture<RespectWk3L1ActivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RespectWk3L1ActivityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RespectWk3L1ActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
