const { $ } = require('@wdio/globals')
const PageEbay = require('./pageEbay');


class BuscadorEbay extends PageEbay {
    //Elementos Web
    get inputProducto() {
      return $('#gh-ac');
    }
  
    get bttnBuscar() {
      return $('#gh-btn');
    }
  
    get results() {
      return $('//h1[@class="srp-controls__count-heading"]/span[1]');
    }

    

    async bucarProducto (producto) {
        await this.inputProducto.setValue(producto);
        await this.bttnBuscar.click();
    }

    async cantidadDeResultados(){
      const resultadosDeBusqueda = await this.results.getText();
      return resultadosDeBusqueda;
    }
  

  }
  
  module.exports = new BuscadorEbay();