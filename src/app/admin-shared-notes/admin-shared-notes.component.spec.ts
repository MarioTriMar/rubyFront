import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSharedNotesComponent } from './admin-shared-notes.component';

describe('AdminSharedNotesComponent', () => {
  let component: AdminSharedNotesComponent;
  let fixture: ComponentFixture<AdminSharedNotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminSharedNotesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminSharedNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
