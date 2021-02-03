import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RunScriptsComponent } from './run-scripts.component';

describe('RunScriptsComponent', () => {
  let component: RunScriptsComponent;
  let fixture: ComponentFixture<RunScriptsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RunScriptsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RunScriptsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
