import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpathyWk1L1StoryComponent } from './empathy-wk1-l1-story.component';

describe('EmpathyWk1L1StoryComponent', () => {
  let component: EmpathyWk1L1StoryComponent;
  let fixture: ComponentFixture<EmpathyWk1L1StoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpathyWk1L1StoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpathyWk1L1StoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
