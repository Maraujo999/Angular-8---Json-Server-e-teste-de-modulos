import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LancamentoNovaPessoaComponent } from './lancamento-nova-pessoa.component';

describe('LancamentoNovaPessoaComponent', () => {
  let component: LancamentoNovaPessoaComponent;
  let fixture: ComponentFixture<LancamentoNovaPessoaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LancamentoNovaPessoaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LancamentoNovaPessoaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
