import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionNotesComponent } from './collection-notes.component';

describe('CollectionNotesComponent', () => {
  let component: CollectionNotesComponent;
  let fixture: ComponentFixture<CollectionNotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollectionNotesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CollectionNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
