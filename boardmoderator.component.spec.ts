import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardmoderatorComponent } from './boardmoderator.component';

describe('BoardmoderatorComponent', () => {
  let component: BoardmoderatorComponent;
  let fixture: ComponentFixture<BoardmoderatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoardmoderatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardmoderatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
