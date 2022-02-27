import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JagLibraryComponent } from './jag-library.component';

describe('JagLibraryComponent', () => {
  let component: JagLibraryComponent;
  let fixture: ComponentFixture<JagLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JagLibraryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JagLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
