import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateeducationalPage } from './updateeducational.page';

describe('UpdateeducationalPage', () => {
 let component: UpdateeducationalPage;
 let fixture: ComponentFixture<UpdateeducationalPage>;

 beforeEach(async(() => {
 TestBed.configureTestingModule({
 declarations: [ UpdateeducationalPage ],
 schemas: [CUSTOM_ELEMENTS_SCHEMA],
 })
 .compileComponents();
 }));

 beforeEach(() => {
 fixture = TestBed.createComponent(UpdateeducationalPage);
 component = fixture.componentInstance;
 fixture.detectChanges();
 });

 it('should create', () => {
 expect(component).toBeTruthy();
 });
});
