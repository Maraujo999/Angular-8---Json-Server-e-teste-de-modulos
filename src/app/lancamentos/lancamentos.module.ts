import { PessoasModule } from './../pessoas/pessoas.module';
import { LancamentoNovaPessoaComponent } from './lancamento-nova-pessoa/lancamento-nova-pessoa.component';
import { LancamentosPesquisaComponent } from './lancamentos-pesquisa/lancamentos-pesquisa.component';
import { LancamentoCadastroComponent } from './lancamento-cadastro/lancamento-cadastro.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { TabViewModule } from 'primeng/tabview';
import { InputTextModule } from 'primeng/components/inputtext/inputtext';
import { ButtonModule } from 'primeng/components/button/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/components/tooltip/tooltip';
import { InputTextareaModule } from 'primeng/components/inputtextarea/inputtextarea';
import { CalendarModule } from 'primeng/components/calendar/calendar';
import { SelectButtonModule } from 'primeng/selectbutton';
import { DropdownModule } from 'primeng/dropdown';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { InputMaskModule } from 'primeng/components/inputmask/inputmask';



@NgModule({
  declarations: [LancamentoCadastroComponent,
  LancamentosPesquisaComponent,
  LancamentoNovaPessoaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    TabViewModule,
    InputTextModule,
    ButtonModule,
    BrowserAnimationsModule,
    TableModule,
    TooltipModule,
    InputTextareaModule,
    CalendarModule,
    SelectButtonModule,
    DropdownModule,
    CurrencyMaskModule,
    InputMaskModule,
    FormsModule

  ],
  exports: [
    LancamentoCadastroComponent,
    LancamentosPesquisaComponent
  ]


})
export class LancamentosModule { }
