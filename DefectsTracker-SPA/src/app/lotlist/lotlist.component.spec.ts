/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LotlistComponent } from './lotlist.component';

describe('LotlistComponent', () => {
  let component: LotlistComponent;
  let fixture: ComponentFixture<LotlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LotlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LotlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
