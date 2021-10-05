import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmineComponent } from './admine.component';

describe('AdmineComponent', () => {
  let component: AdmineComponent;
  let fixture: ComponentFixture<AdmineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
