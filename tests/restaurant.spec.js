const { createMenu } = require('../src/restaurant');

describe('10 - Implemente os casos de teste e a função `createMenu`', () => {
     
    it('Verifique se o retorno da função createMenu() é um objeto que possui a chave fetchMenu, a qual tem como valor uma função.', () => {
      expect(typeof createMenu().fetchMenu).toBe('function');
    });

    it('Verifique se objetoRetornado.fetchMenu() retorna um objeto cujas chaves são somente "food" e "drink"', () => {
      expect(createMenu({ food: {}, drink: {} }).fetchMenu()).toEqual({ food: {}, drink: {} });
    });
    
    it('Verifique se o menu passado pra função createMenu é identico ao menu recuperado pela função objetoRetornado.fetchMenu', () => {
      expect(createMenu({ food: {coxinha: 3.90}, drink: {agua: 3.90} }).fetchMenu()).toEqual({ food: {coxinha: 3.90}, drink: {agua: 3.90} });
    });

    it('Verifique se objetoRetornado.consumption, após a criação do menu, retorna um array vazio.', () => {
      expect(createMenu().consumption).toEqual([]);
    });

    it('Verifique se, ao chamar uma função associada à chave order no objeto retornado, passando uma string como parâmetro (como objetoRetornado.order("coxinha")), tal string é adicionada ao array retornado em objetoRetornado.consumption.', ()=> {
      createMenu().order('coxinha');
      expect(createMenu().consumption).toContain("coxinha");
    });
    
    it('Verifique se, ao adicionar três pedidos, dentre bebidas e comidas, o array `objetoRetornado.consumption` contém os itens pedidos.', () => {
      /* createMenu().order('coxinha'); */
      createMenu().order('agua');
      createMenu().order('sopa');
      createMenu().order('sashimi');
      expect(createMenu().consumption).toEqual(["coxinha", "agua", "sopa", "sashimi"]);
    });

    it('Verifique se a função `order` aceita que pedidos repetidos sejam acrescidos a consumption.', () => {
      createMenu().order('coxinha');
      expect(createMenu().consumption).toEqual(["coxinha", "agua", "sopa", "sashimi", "coxinha"]);
    });
    
    it('Verifique se, ao chamar objetoRetornado.pay(), retorna-se a soma dos preços de tudo que foi pedido, conforme registrado em `objetoRetornado.consumption`', () => {
      /* createMenu().order('coxinha');
      createMenu().order('agua');
      createMenu().order('coxinha'); */
      expect(createMenu().pay()).toEqual(12.87);
    });  
});
