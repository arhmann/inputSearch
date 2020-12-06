
let arrCityNames = {};
let UlParrent = document.querySelector('.content__list');

fetch('https://raw.githubusercontent.com/cscart/apply-for-job/master/frontend-developer/files/003-rate-areas.json',{
  method: 'GET',
})
.then(response => {
  if(response.ok == true){
    return response.text()
  }
})
.then(response => {  //string
  arrCityNames = JSON.parse(response);
   for(i in arrCityNames){
    let itemDOM = `<li> <span> ${arrCityNames[i].name} </span> <button class="content__btn btnAdd">Добавить</button></li>`;
    console.log(arrCityNames[i].name)
    UlParrent.innerHTML += itemDOM;
   }
   
     
})

