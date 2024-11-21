import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionIni2Component } from './section-ini2.component';

describe('SectionIni2Component', () => {
  let component: SectionIni2Component;
  let fixture: ComponentFixture<SectionIni2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SectionIni2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SectionIni2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
