import { PessoasModule } from './pessoas/pessoas.module';
import { NavegacaoModule } from './navegacao/navegacao.module';
import { BotoesModule } from './botoes/botoes.module';

import { CurrencyMaskModule } from 'ng2-currency-mask';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {InputTextModule} from 'primeng/components/inputtext/inputtext';
import {TabViewModule} from 'primeng/tabview';
import { AppComponent } from './app.component';
import {ButtonModule} from 'primeng/components/button/button';
import {TableModule} from 'primeng/table';
import {InputTextareaModule} from 'primeng/components/inputtextarea/inputtextarea';
import {TooltipModule} from 'primeng/components/tooltip/tooltip';
import {CalendarModule} from 'primeng/components/calendar/calendar';
import { LancamentosPesquisaComponent } from './lancamentos/lancamentos-pesquisa/lancamentos-pesquisa.component';


import { InputMaskModule } from 'primeng/components/inputmask/inputmask';
import {DropdownModule} from 'primeng/dropdown';
import { NavbarComponent } from './navbar/navbar.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { PessoasComponent } from './pessoas/pessoas.component';
import {SelectButtonModule} from 'primeng/selectbutton';
import { LancamentoCadastroComponent } from './lancamentos/lancamento-cadastro/lancamento-cadastro.component';
import { LancamentoNovaPessoaComponent } from './lancamentos/lancamento-nova-pessoa/lancamento-nova-pessoa.component';
import { FormsModule } from '@angular/forms';
import { MessageComponent } from './shared/message/message.component';
import { LancamentosModule } from './lancamentos/lancamentos.module';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
   ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LancamentosModule,
    PessoasModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
