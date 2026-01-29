import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RespectWk2L1ActivityComponent } from './respect-wk2-l1-activity.component';

describe('RespectWk2L1ActivityComponent', () => {
  let component: RespectWk2L1ActivityComponent;
  let fixture: ComponentFixture<RespectWk2L1ActivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RespectWk2L1ActivityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RespectWk2L1ActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
