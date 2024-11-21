import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IniSection1Component } from './ini-section1.component';

describe('IniSection1Component', () => {
  let component: IniSection1Component;
  let fixture: ComponentFixture<IniSection1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IniSection1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IniSection1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
