function decorator(
  classPrototype: any,
  nomeMetodo: string,
  descriptor: PropertyDescriptor,
): PropertyDescriptor {
  return {
    value: function (...args: string[]) {
      return args[0].toLocaleUpperCase();
    },
  };
}

export class Pessoa {
  nome: string;
  sobrenome: string;
  idade: number;

  constructor(nome: string, sobrenome: string, idade: number) {
    this.idade = idade;
    this.nome = nome;
    this.sobrenome = sobrenome;
  }

  @decorator
  apresentar(string: string): string {
    return string;
  }

  get nomeCompleto(): string {
    return 'o meu rei';
  }
}

const pessoa1 = new Pessoa('Carlão', 'da Marcia', 44);

const tt = pessoa1.apresentar('dsfsfdsd');
console.log(tt);
