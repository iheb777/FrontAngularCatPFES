import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListpfeComponent } from './listpfe.component';

describe('ListpfeComponent', () => {
  let component: ListpfeComponent;
  let fixture: ComponentFixture<ListpfeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListpfeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListpfeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
