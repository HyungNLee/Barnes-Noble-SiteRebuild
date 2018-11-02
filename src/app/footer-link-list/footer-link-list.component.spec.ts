import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterLinkListComponent } from './footer-link-list.component';

describe('FooterLinkListComponent', () => {
  let component: FooterLinkListComponent;
  let fixture: ComponentFixture<FooterLinkListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterLinkListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterLinkListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
