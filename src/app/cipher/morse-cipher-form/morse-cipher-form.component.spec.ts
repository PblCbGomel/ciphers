import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MorseCipherFormComponent } from './morse-cipher-form.component';

describe('MorseCipherFormComponent', () => {
  let component: MorseCipherFormComponent;
  let fixture: ComponentFixture<MorseCipherFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MorseCipherFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MorseCipherFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
