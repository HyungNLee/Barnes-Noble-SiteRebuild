import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderAdvertComponent } from './header-advert.component';

describe('HeaderAdvertComponent', () => {
  let component: HeaderAdvertComponent;
  let fixture: ComponentFixture<HeaderAdvertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderAdvertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderAdvertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
