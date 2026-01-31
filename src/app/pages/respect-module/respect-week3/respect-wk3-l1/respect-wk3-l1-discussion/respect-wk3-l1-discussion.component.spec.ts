import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RespectWk3L1DiscussionComponent } from './respect-wk3-l1-discussion.component';

describe('RespectWk3L1DiscussionComponent', () => {
  let component: RespectWk3L1DiscussionComponent;
  let fixture: ComponentFixture<RespectWk3L1DiscussionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RespectWk3L1DiscussionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RespectWk3L1DiscussionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
