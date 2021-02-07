export class FuncionarioService {

  funcionarios = [{ id: 1, nome: 'Cassio' }];
  ultimoId = 1;

  adicionar(nomePassado): void {
    const funcionario = {
      id: ++this.ultimoId,
      nome: nomePassado
    };

    this.funcionarios.push(funcionario);
    console.log(JSON.stringify(this.funcionarios));
  }

  consultar() {
    return this.funcionarios;
  }

}

// export class FuncionarioAbreviadoService extends FuncionarioService {
//   adicionar(nome: string){
//     super.adicionar(nome.substr(0, 3) + '...');
//   }
// }

// export class FuncionarioAbreviadoService extends FuncionarioService {

//   constructor(private numeroCaracteres: number) {
//     super();
//   }

//   adicionar(nome: string) {
//     super.adicionar(nome.substr(0, this.numeroCaracteres) + '...');
//   }
// }
