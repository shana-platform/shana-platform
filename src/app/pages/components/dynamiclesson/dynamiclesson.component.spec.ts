import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamiclessonComponent } from './dynamiclesson.component';

describe('DynamiclessonComponent', () => {
  let component: DynamiclessonComponent;
  let fixture: ComponentFixture<DynamiclessonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamiclessonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamiclessonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
