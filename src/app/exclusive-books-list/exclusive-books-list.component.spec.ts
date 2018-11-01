import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExclusiveBooksListComponent } from './exclusive-books-list.component';

describe('ExclusiveBooksListComponent', () => {
  let component: ExclusiveBooksListComponent;
  let fixture: ComponentFixture<ExclusiveBooksListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExclusiveBooksListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExclusiveBooksListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
