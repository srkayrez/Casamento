import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Presente } from './presente';

describe('Presente', () => {
  let component: Presente;
  let fixture: ComponentFixture<Presente>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Presente],
    }).compileComponents();

    fixture = TestBed.createComponent(Presente);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
