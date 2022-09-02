export class Empresa {
  public readonly name: string; //Public é redundante
  readonly colaboradores: Colaborador[] = [];
  protected readonly cnpj: string;

  constructor(name: string, cnpj: string) {
    this.name = name;
    this.cnpj = cnpj;
  }

  addColaborador(colaborador: Colaborador): void {
    this.colaboradores.push(colaborador);
  }
}

export class Colaborador {
  constructor(
    readonly nome: string,
    readonly sobrenome: string,
    readonly matrícula: number,
  ) {}
}

const empresa1 = new Empresa('Vivandas', '000001-000');
const func1 = new Colaborador(
  'João',
  'Gomes',
  empresa1.colaboradores.length + 1,
);
empresa1.addColaborador(func1);
const func2 = new Colaborador(
  'Carlos',
  'Mouras',
  empresa1.colaboradores.length + 1,
);
empresa1.addColaborador(func2);
const func3 = new Colaborador(
  'Márcio',
  'Trindad',
  empresa1.colaboradores.length + 1,
);
empresa1.addColaborador(func3);
const func4 = new Colaborador(
  'Roberto',
  'Felisbino',
  empresa1.colaboradores.length + 1,
);
empresa1.addColaborador(func4);
console.log(empresa1);
