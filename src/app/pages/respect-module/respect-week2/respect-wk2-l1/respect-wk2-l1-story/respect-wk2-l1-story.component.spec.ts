import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RespectWk2L1StoryComponent } from './respect-wk2-l1-story.component';

describe('RespectWk2L1StoryComponent', () => {
  let component: RespectWk2L1StoryComponent;
  let fixture: ComponentFixture<RespectWk2L1StoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RespectWk2L1StoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RespectWk2L1StoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
