import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntegrityModuleComponent } from './integrity-module.component';

describe('IntegrityModuleComponent', () => {
  let component: IntegrityModuleComponent;
  let fixture: ComponentFixture<IntegrityModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntegrityModuleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntegrityModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
