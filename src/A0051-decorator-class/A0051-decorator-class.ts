export class Animal {
  constructor(public cor: string) {}
}

function Decorator<T extends new (...args: any[]) => any>(target: T): T {
  return class extends target {
    private raça: string;
    constructor(...args: any[]) {
      super(args);
      this.raça = 'huhu';
    }
  };
}

const dec = Decorator(Animal);
const animal = new dec('roxo');
console.log(animal);
