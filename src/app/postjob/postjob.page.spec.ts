import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostjobPage } from './postjob.page';

describe('PostjobPage', () => {
  let component: PostjobPage;
  let fixture: ComponentFixture<PostjobPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostjobPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostjobPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
