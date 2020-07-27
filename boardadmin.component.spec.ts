import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardadminComponent } from './boardadmin.component';

describe('BoardadminComponent', () => {
  let component: BoardadminComponent;
  let fixture: ComponentFixture<BoardadminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoardadminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
