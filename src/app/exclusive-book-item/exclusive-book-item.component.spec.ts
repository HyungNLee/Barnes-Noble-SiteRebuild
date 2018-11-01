import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExclusiveBookItemComponent } from './exclusive-book-item.component';

describe('ExclusiveBookItemComponent', () => {
  let component: ExclusiveBookItemComponent;
  let fixture: ComponentFixture<ExclusiveBookItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExclusiveBookItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExclusiveBookItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
