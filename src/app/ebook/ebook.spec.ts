import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ebook } from './ebook';

describe('Ebook', () => {
  let component: Ebook;
  let fixture: ComponentFixture<Ebook>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Ebook]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ebook);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
