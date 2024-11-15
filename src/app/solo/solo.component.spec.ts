import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoloComponent } from './solo.component';

describe('SoloComponent', () => {
  let component: SoloComponent;
  let fixture: ComponentFixture<SoloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoloComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SoloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
