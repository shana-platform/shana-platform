import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RespectWk3L1StoryComponent } from './respect-wk3-l1-story.component';

describe('RespectWk3L1StoryComponent', () => {
  let component: RespectWk3L1StoryComponent;
  let fixture: ComponentFixture<RespectWk3L1StoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RespectWk3L1StoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RespectWk3L1StoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
