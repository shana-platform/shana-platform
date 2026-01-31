import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpathyModuleComponent } from './empathy-module.component';

describe('EmpathyModuleComponent', () => {
  let component: EmpathyModuleComponent;
  let fixture: ComponentFixture<EmpathyModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpathyModuleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpathyModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
