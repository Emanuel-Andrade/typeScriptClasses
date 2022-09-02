export class Escritor {
  private _ferramenta: Ferramenta | null = null;

  constructor(private _nome: string) {}

  set ferramenta(ferramenta: Ferramenta | null) {
    this._ferramenta = ferramenta;
  }

  escrever(): void {
    if (this._ferramenta == null)
      return console.log('não há ferramenta para escrever');
    this._ferramenta.escrever();
  }
  get nome(): string {
    return this._nome;
  }
}

export abstract class Ferramenta {
  constructor(private _nome: string) {}

  abstract escrever(): void;

  get nome(): string {
    return this._nome;
  }
}

export class Caneta extends Ferramenta {
  escrever(): void {
    console.log(this.nome + ' está escrevendo...');
  }
}

export class MaquinaEscrever extends Ferramenta {
  escrever(): void {
    console.log(this.nome + ' está digitando...');
  }
}

const escritor = new Escritor('manel');
const caneta = new Caneta('bic');
const maquina = new Caneta('aerofolio');

console.log(escritor.nome);
console.log(caneta.nome);
console.log(maquina.nome);

escritor.ferramenta = caneta;
escritor.escrever();
