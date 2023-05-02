import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminFriendshipsComponent } from './admin-friendships.component';

describe('AdminFriendshipsComponent', () => {
  let component: AdminFriendshipsComponent;
  let fixture: ComponentFixture<AdminFriendshipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminFriendshipsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminFriendshipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
