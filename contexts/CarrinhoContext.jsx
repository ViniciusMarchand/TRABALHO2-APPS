import { createContext, useContext, useState } from 'react';

const CarrinhoContext = createContext({
  produtos: [],
  adicionarProduto: () => {},
  removerProduto: () => {},
  limparCarrinho: () => {},
  totalItens: 0,
  valorTotal: 0,
  valorTotalComDesconto: 0,
  totalEconomizado: 0
});

export function CarrinhoProvider({ children }) {
  const [produtos, setProdutos] = useState([]);

  const { 
    totalItens, 
    valorTotal, 
    valorTotalComDesconto, 
    totalEconomizado 
  } = produtos.reduce((acc, produto) => {
    const precoUnitario = produto.value || 0;
    const quantidade = produto.quantidade || 0;
    const porcentagemDesconto = produto.promotion || 0;
    
    const precoOriginal = precoUnitario * quantidade;
    const valorDesconto = precoOriginal * (porcentagemDesconto / 100);
    const precoComDesconto = precoOriginal - valorDesconto;

    return {
      totalItens: acc.totalItens + quantidade,
      valorTotal: acc.valorTotal + precoOriginal,
      valorTotalComDesconto: acc.valorTotalComDesconto + precoComDesconto,
      totalEconomizado: acc.totalEconomizado + valorDesconto
    };
  }, { totalItens: 0, valorTotal: 0, valorTotalComDesconto: 0, totalEconomizado: 0 });

  const adicionarProduto = (novoProduto) => {
    setProdutos(produtosAtuais => {
      const produtoExistente = produtosAtuais.find(p => p.id === novoProduto.id);
      
      if (produtoExistente) {
        return produtosAtuais.map(p =>
          p.id === novoProduto.id
            ? { ...p, quantidade: p.quantidade + 1 }
            : p
        );
      }
      return [...produtosAtuais, { 
        ...novoProduto, 
        quantidade: 1 
      }];
    });
  };

  const removerProduto = (id) => {
    setProdutos(produtosAtuais => 
      produtosAtuais.filter(produto => produto.id !== id)
    );
  };

  const limparCarrinho = () => {
    setProdutos([]);
  };

  return (
    <CarrinhoContext.Provider
      value={{
        produtos,
        adicionarProduto,
        removerProduto,
        limparCarrinho,
        totalItens,
        valorTotal,
        valorTotalComDesconto,
        totalEconomizado
      }}
    >
      {children}
    </CarrinhoContext.Provider>
  );
}

export function useCarrinho() {
  return useContext(CarrinhoContext);
}