let xhttp = new XMLHttpRequest();
let originalURL = "https://raw.githubusercontent.com/cscart/apply-for-job/master/frontend-developer/files/003-rate-areas.json";
let ulItems = document.querySelector(".content__list");
let objCityName = {};

xhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
  }
};

xhttp.open("GET", originalURL, true);
xhttp.send();
xhttp.onload = function () {
  let responseAjax = xhttp.response;
  let resAjax = JSON.parse(responseAjax);

  for (indx in resAjax) {
    objCityName = resAjax[indx].name;
         let itemDOM = `<li> <span> ${resAjax[indx].name} </span> <button class="content__btn btnAdd">Добавить</button></li>`;
        ulItems.innerHTML += itemDOM; 

     //ul.appendChild(ulItems)
  }
};
