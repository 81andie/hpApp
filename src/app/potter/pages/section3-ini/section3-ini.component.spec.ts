import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Section3IniComponent } from './section3-ini.component';

describe('Section3IniComponent', () => {
  let component: Section3IniComponent;
  let fixture: ComponentFixture<Section3IniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Section3IniComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Section3IniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
