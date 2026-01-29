import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RespectWk2L1DiscussionComponent } from './respect-wk2-l1-discussion.component';

describe('RespectWk2L1DiscussionComponent', () => {
  let component: RespectWk2L1DiscussionComponent;
  let fixture: ComponentFixture<RespectWk2L1DiscussionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RespectWk2L1DiscussionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RespectWk2L1DiscussionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
