import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskmgmtComponent } from './taskmgmt.component';

describe('TaskmgmtComponent', () => {
  let component: TaskmgmtComponent;
  let fixture: ComponentFixture<TaskmgmtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskmgmtComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskmgmtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
