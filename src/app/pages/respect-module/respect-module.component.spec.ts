import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RespectModuleComponent } from './respect-module.component';

describe('RespectModuleComponent', () => {
  let component: RespectModuleComponent;
  let fixture: ComponentFixture<RespectModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RespectModuleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RespectModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
