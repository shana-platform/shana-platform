import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Week1L2DicussionTabComponent } from './week1-l2-dicussion-tab.component';

describe('Week1L2DicussionTabComponent', () => {
  let component: Week1L2DicussionTabComponent;
  let fixture: ComponentFixture<Week1L2DicussionTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Week1L2DicussionTabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Week1L2DicussionTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
