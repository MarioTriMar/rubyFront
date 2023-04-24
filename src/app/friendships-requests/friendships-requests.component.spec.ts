import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendshipsRequestsComponent } from './friendships-requests.component';

describe('FriendshipsRequestsComponent', () => {
  let component: FriendshipsRequestsComponent;
  let fixture: ComponentFixture<FriendshipsRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FriendshipsRequestsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FriendshipsRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
