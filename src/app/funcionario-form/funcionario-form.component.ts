import { LogService } from './../log.service';
import { FuncionarioService } from './../funcionario.service';
import { Component, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-funcionario-form',
  templateUrl: './funcionario-form.component.html',
  styleUrls: ['./funcionario-form.component.css']
})
export class FuncionarioFormComponent {

  constructor(
    private service: FuncionarioService,
    private logService: LogService
    ) {
  }

  adicionar(nome: string){
    this.service.adicionar(nome);
    this.logService.log(`Adc ${nome}`);
  }

}
