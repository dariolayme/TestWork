const { browser } = require('@wdio/globals')

module.exports = class PageEbay {
    
    open () {
        return browser.url(`http://www.ebay.com/`)
    }
}
