import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersFriendshipComponent } from './users-friendship.component';

describe('UsersFriendshipComponent', () => {
  let component: UsersFriendshipComponent;
  let fixture: ComponentFixture<UsersFriendshipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersFriendshipComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsersFriendshipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
