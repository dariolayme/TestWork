const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals')

const BuscadorEbay = require('../pageobjects/buscadorEbay');

const pages = {
  bucarProducto: BuscadorEbay
}


Given('El usuario esta en la homepage de eBay', () => {
  BuscadorEbay.open( )
});

When(/^El usuario busca (\w+)$/, async (producto) => {
  await BuscadorEbay.bucarProducto(producto);
});


Then('Deberiamos ver resultados en la página de búsqueda', async () => {
  const numberOfResults = await BuscadorEbay.cantidadDeResultados();
  console.log(`Numero de elementos encontrados: ${numberOfResults}`);
});
