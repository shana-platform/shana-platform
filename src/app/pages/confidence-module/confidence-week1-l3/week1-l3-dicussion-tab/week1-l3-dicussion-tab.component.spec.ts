import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Week1L3DicussionTabComponent } from './week1-l3-dicussion-tab.component';

describe('Week1L3DicussionTabComponent', () => {
  let component: Week1L3DicussionTabComponent;
  let fixture: ComponentFixture<Week1L3DicussionTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Week1L3DicussionTabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Week1L3DicussionTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
