import { FuncionarioService } from './funcionario.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  funcionarios = [];

  constructor(private service: FuncionarioService) {
  }

  ngOnInit() {
    this.funcionarios = this.service.consultar();
  }

}
