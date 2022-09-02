type obterChaveFn = <o, k extends keyof o>(objeto: o, chave: k) => o[k];

const obterChave: obterChaveFn = (objeto, chave) => objeto[chave];

const carro = {
  donos: ['Mario, Rose, Gabriel, Carlos'],
  ano: 2014,
  cor: 'verde',
  modelo: 'Onix',
};

const tt = obterChave(carro, 'ano');

console.log(tt);
