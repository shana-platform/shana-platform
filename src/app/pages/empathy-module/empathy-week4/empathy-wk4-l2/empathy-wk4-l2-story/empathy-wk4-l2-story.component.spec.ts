import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpathyWk4L2StoryComponent } from './empathy-wk4-l2-story.component';

describe('EmpathyWk4L2StoryComponent', () => {
  let component: EmpathyWk4L2StoryComponent;
  let fixture: ComponentFixture<EmpathyWk4L2StoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpathyWk4L2StoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpathyWk4L2StoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
