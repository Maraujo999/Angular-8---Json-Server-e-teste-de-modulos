import { LancamentoCadastroComponent } from './../lancamentos/lancamento-cadastro/lancamento-cadastro.component';
import { LancamentosModule } from './../lancamentos/lancamentos.module';
import { SharedModule } from './../shared/shared.module';
import { PessoasComponent } from './pessoas.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PessoasCadastroComponent } from './pessoas-cadastro/pessoas-cadastro.component';
import { PessoaGridComponent } from './pessoa-grid/pessoa-grid.component';
import { PessoasPesquisaComponent } from './pessoas-pesquisa/pessoas-pesquisa.component';
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
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { DropdownModule } from 'primeng/dropdown';
import { InputMaskModule } from 'primeng/components/inputmask/inputmask';



@NgModule({
  declarations: [PessoasCadastroComponent, PessoasPesquisaComponent],
  imports: [
    CommonModule,
    LancamentosModule,
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
    FormsModule,
    SharedModule

  ],
  exports: [PessoasPesquisaComponent, PessoasCadastroComponent]
})
export class PessoasModule { }
