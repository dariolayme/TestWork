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
      return $$('.s-item');
    }

    

    async bucarProducto (producto) {
        await this.inputProducto.setValue(producto);
        await this.bttnBuscar.click();
    }

    async cantidadDeResultados(){
      //await this.results.length;
      const searchResults = await $$('.s-item');
    return searchResults.length;
    }
  

  }
  
  module.exports = new BuscadorEbay();