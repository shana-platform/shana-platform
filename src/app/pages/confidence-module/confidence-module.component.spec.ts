import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfidenceModuleComponent } from './confidence-module.component';

describe('ConfidenceModuleComponent', () => {
  let component: ConfidenceModuleComponent;
  let fixture: ComponentFixture<ConfidenceModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfidenceModuleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfidenceModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
