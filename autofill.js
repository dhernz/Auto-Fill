var casper = require('casper').create();
phantom.cookiesEnabled = true;

var webpage = 'https://www.priceline.com/';

casper.start(webpage,function(){
console.log('we enter the web page')
  
});

casper.then(function(){
  this.click('#tab-flights');
  console.log('clicked on flight');
}); 

casper.then(function(){

  this.evaluate(function(){
    document.querySelector('#air-orig-0').value = 'San Francisco, CA - San Francisco Intl Airport (SFO)';
    document.querySelector('#air-dest-0').value = 'Tegucigalpa, Honduras - Toncontín Intl Airport (TGU)';
    casper.capture('citiesInput.png');
    this.echo('done')
  });  

});

casper.run();