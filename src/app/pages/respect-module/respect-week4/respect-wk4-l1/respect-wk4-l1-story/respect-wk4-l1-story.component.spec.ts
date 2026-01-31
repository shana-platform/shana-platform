import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RespectWk4L1StoryComponent } from './respect-wk4-l1-story.component';

describe('RespectWk4L1StoryComponent', () => {
  let component: RespectWk4L1StoryComponent;
  let fixture: ComponentFixture<RespectWk4L1StoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RespectWk4L1StoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RespectWk4L1StoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
