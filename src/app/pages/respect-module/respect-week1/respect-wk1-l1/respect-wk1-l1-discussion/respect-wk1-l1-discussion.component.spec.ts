import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RespectWk1L1DiscussionComponent } from './respect-wk1-l1-discussion.component';

describe('RespectWk1L1DiscussionComponent', () => {
  let component: RespectWk1L1DiscussionComponent;
  let fixture: ComponentFixture<RespectWk1L1DiscussionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RespectWk1L1DiscussionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RespectWk1L1DiscussionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
