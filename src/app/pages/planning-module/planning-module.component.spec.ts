import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanningModuleComponent } from './planning-module.component';

describe('PlanningModuleComponent', () => {
  let component: PlanningModuleComponent;
  let fixture: ComponentFixture<PlanningModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanningModuleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanningModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
