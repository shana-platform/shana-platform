import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RespectWk1L1StoryComponent } from './respect-wk1-l1-story.component';

describe('RespectWk1L1StoryComponent', () => {
  let component: RespectWk1L1StoryComponent;
  let fixture: ComponentFixture<RespectWk1L1StoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RespectWk1L1StoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RespectWk1L1StoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
