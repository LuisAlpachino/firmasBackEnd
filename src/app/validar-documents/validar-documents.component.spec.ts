import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidarDocumentsComponent } from './validar-documents.component';

describe('ValidarDocumentsComponent', () => {
  let component: ValidarDocumentsComponent;
  let fixture: ComponentFixture<ValidarDocumentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidarDocumentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidarDocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
