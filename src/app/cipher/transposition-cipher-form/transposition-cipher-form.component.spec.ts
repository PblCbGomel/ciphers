import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranspositionCipherFormComponent } from './transposition-cipher-form.component';

describe('TranspositionCipherFormComponent', () => {
  let component: TranspositionCipherFormComponent;
  let fixture: ComponentFixture<TranspositionCipherFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TranspositionCipherFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TranspositionCipherFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
