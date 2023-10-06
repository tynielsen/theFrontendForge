import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerminalSectionComponent } from './terminal-section.component';

describe('TerminalSectionComponent', () => {
  let component: TerminalSectionComponent;
  let fixture: ComponentFixture<TerminalSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TerminalSectionComponent]
    });
    fixture = TestBed.createComponent(TerminalSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
