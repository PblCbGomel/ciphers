import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaesarCipherFormComponent } from './caesar-cipher-form.component';

describe('CaesarCipherFormComponent', () => {
  let component: CaesarCipherFormComponent;
  let fixture: ComponentFixture<CaesarCipherFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaesarCipherFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaesarCipherFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
