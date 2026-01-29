import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RespectWk1L1ActivityComponent } from './respect-wk1-l1-activity.component';

describe('RespectWk1L1ActivityComponent', () => {
  let component: RespectWk1L1ActivityComponent;
  let fixture: ComponentFixture<RespectWk1L1ActivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RespectWk1L1ActivityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RespectWk1L1ActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
