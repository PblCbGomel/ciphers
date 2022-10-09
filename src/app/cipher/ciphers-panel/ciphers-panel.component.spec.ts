import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CiphersPanelComponent } from './ciphers-panel.component';

describe('CiphersPanelComponent', () => {
  let component: CiphersPanelComponent;
  let fixture: ComponentFixture<CiphersPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CiphersPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CiphersPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
