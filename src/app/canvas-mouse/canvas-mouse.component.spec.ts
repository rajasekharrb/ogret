import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CanvasMouseComponent } from './canvas-mouse.component';

describe('CanvasMouseComponent', () => {
  let component: CanvasMouseComponent;
  let fixture: ComponentFixture<CanvasMouseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CanvasMouseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CanvasMouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
