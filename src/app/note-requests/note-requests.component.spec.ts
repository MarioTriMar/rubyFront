import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteRequestsComponent } from './note-requests.component';

describe('NoteRequestsComponent', () => {
  let component: NoteRequestsComponent;
  let fixture: ComponentFixture<NoteRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoteRequestsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoteRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
