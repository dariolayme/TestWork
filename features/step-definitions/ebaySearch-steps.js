const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals')

const BuscadorEbay = require('../pageobjects/buscadorEbay');

const pages = {
  bucarProducto: BuscadorEbay
}


Given('Estoy en la homepage de eBay', () => {
  BuscadorEbay.open( )
});

When(/^Quiero buscar (\w+)$/, async (producto) => {
  await BuscadorEbay.bucarProducto(producto);
});


Then('Obtenemos la cantidad de resultados', async () => {
  const numberOfResults = await BuscadorEbay.cantidadDeResultados();
  console.log(`Numero de elementos encontrados: ${numberOfResults}`);
});
