import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DespesaformComponent } from './despesaform.component';

describe('DespesaformComponent', () => {
  let component: DespesaformComponent;
  let fixture: ComponentFixture<DespesaformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DespesaformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DespesaformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
