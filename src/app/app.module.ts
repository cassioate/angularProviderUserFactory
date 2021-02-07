import { LogService } from './log.service';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FuncionarioCardComponent } from './funcionario-card/funcionario-card.component';
import { FuncionarioFormComponent } from './funcionario-form/funcionario-form.component';
import { CampoColoridoDirective } from './campo-colorido.directive';
import { FuncionarioService } from './funcionario.service';

// const criarFuncionarioService = () => {
//   return new FuncionarioAbreviadoService(5);
// }

@NgModule({
  declarations: [
    AppComponent,
    FuncionarioCardComponent,
    FuncionarioFormComponent,
    CampoColoridoDirective
  ],
  imports: [
    BrowserModule
  ],
  // providers: [ { provide: FuncionarioService, useClass: FuncionarioAbreviadoService } ],
  // providers: [ { provide: FuncionarioService, useFactory: criarFuncionarioService } ],
  providers: [
    FuncionarioService,
    LogService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
