import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MySharednotesComponent } from './my-sharednotes.component';

describe('MySharednotesComponent', () => {
  let component: MySharednotesComponent;
  let fixture: ComponentFixture<MySharednotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MySharednotesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MySharednotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
