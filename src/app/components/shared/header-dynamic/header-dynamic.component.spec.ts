import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderDynamicComponent } from './header-dynamic.component';

describe('HeaderDynamicComponent', () => {
  let component: HeaderDynamicComponent;
  let fixture: ComponentFixture<HeaderDynamicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderDynamicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderDynamicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
