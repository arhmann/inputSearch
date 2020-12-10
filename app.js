import Api from './api.js';
import Content from './content.js';

const url = "https://raw.githubusercontent.com/cscart/apply-for-job/master/frontend-developer/files/003-rate-areas.json";
const api = new Api();
const res = api.fetchData(url);
const arrNames = [];

res.then( function (arrCityNames){
   arrCityNames.forEach(objNames => {
    arrNames.push(objNames.name)
  });
  const content = new Content();
  for (let i = 0; i < arrNames.length; i++){
    content.renderElement(arrNames[i]);
  }
  content.markAndSearch(arrNames);
  //content.markAndSearch(arrNames);

});



