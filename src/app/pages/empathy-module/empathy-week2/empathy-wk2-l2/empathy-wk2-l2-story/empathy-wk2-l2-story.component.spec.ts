import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpathyWk2L2StoryComponent } from './empathy-wk2-l2-story.component';

describe('EmpathyWk2L2StoryComponent', () => {
  let component: EmpathyWk2L2StoryComponent;
  let fixture: ComponentFixture<EmpathyWk2L2StoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpathyWk2L2StoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpathyWk2L2StoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
