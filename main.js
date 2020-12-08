import Api from './api.js';
import Content from './content.js';

const url = "https://raw.githubusercontent.com/cscart/apply-for-job/master/frontend-developer/files/003-rate-areas.json";
console.log('Main')
const api = new Api();
const res = api.fetchData(url);
const arrNames = [];

res.then( function (arrCityNames){
   arrCityNames.forEach(objNames => {
    arrNames.push(objNames.name)
  });
  const content = new Content();
  content.renderElement(arrNames[0]);

});



