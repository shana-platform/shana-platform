import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdentityModuleComponent } from './identity-module.component';

describe('IdentityModuleComponent', () => {
  let component: IdentityModuleComponent;
  let fixture: ComponentFixture<IdentityModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdentityModuleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdentityModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
