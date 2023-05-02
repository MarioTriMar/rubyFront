import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddnoteCollectionComponent } from './addnote-collection.component';

describe('AddnoteCollectionComponent', () => {
  let component: AddnoteCollectionComponent;
  let fixture: ComponentFixture<AddnoteCollectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddnoteCollectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddnoteCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
