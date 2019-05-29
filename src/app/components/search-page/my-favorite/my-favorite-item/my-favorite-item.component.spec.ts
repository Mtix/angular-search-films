import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFavoriteItemComponent } from './my-favorite-item.component';

describe('SearchResultItemComponent', () => {
  let component: MyFavoriteItemComponent;
  let fixture: ComponentFixture<MyFavoriteItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyFavoriteItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyFavoriteItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
