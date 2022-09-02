export class Carrinho {
  private readonly produtos: Produto[] = [];

  setProdutos(...produtos: Produto[]): void {
    produtos.forEach((produto) => this.produtos.push(produto));
  }

  mostrarProdutos(): Produto[] {
    return this.produtos;
  }
  valorTotal(): number {
    return this.produtos.reduce((soma, produto) => soma + produto.preço, 0);
  }
}

export class Produto {
  constructor(public nome: string, public preço: number) {}
}

const produto1 = new Produto('Boné', 60);
const produto2 = new Produto('dildo', 160);
const produto3 = new Produto('ass', 30);
const produto4 = new Produto('flashlight', 460);
const carrinho = new Carrinho();

carrinho.setProdutos(produto1, produto2, produto3, produto4);
console.log(carrinho.valorTotal());
