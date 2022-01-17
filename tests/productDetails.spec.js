const productDetails = require('../src/productDetails');

/*
  Dadas duas strings que representam nomes de produtos, retorne um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara') // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  const firstProduct = 'Alcool gel';
  const secondProduct = 'Máscara';
  const arr = productDetails(firstProduct, secondProduct);
  it('productDetails é uma função', () => {
    expect(typeof productDetails).toBe('function');
  });
  it('array retornado pela função contém dois itens dentro', () => {
    expect(productDetails(firstProduct, secondProduct).length).toBe(2);
  });
  it('os dois itens dentro do array retornado pela função são objetos', () => {
    expect(typeof arr[0] && typeof arr[1]).toEqual('object');
  });
  it('quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si', () => {
    expect(arr[0]).not.toContain(arr[1]);
  });
  it('os dois productIds terminam com 123', () => {
    expect(arr[0].details.productId && arr[1].details.productId).toContain('123')
  });
  it('se o retorno da função é um array', () => {
    expect(Array.isArray(arr)).toBeTruthy();
  });
});
