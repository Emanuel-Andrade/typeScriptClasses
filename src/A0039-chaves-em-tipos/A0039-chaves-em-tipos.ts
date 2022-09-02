export type Veiculo = {
  nome: string;
  ano: number;
};

export type Car = {
  year: Veiculo['ano'];
  name: Veiculo['nome'];
};

export class Fabrique {
  constructor(public name: Veiculo['nome'], public year: Veiculo['ano']) {}
}

const ford = new Fabrique('Ford', 2022);
console.log(ford);
