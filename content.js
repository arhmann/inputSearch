import Api from "./api.js";

export default class Content extends Api {
  constructor() {
    super();
    this.url = "https://raw.githubusercontent.com/cscart/apply-for-job/master/frontend-developer/files/003-rate-areas.json";
  }

  searchValue() {
    const api = new Api();
    const res = api.fetchData(this.url);
    const arrNames = [];
    const input = document.querySelector(".content__input");
    let result = null;
    res.then(function (ajaxNames) {
      ajaxNames.forEach((names) => {
        arrNames.push(names.name);

        input.addEventListener("input", () => {
          if (input.value === "" || input.value.length < 3) return;
          const matches = arrNames.filter((city) =>
            city.toLowerCase().includes(input.value.toLowerCase()));
            matches.forEach((cityName) => {
            if (matches.includes(cityName)) {
              result = cityName;
            }
          });
            const content = new Content();
            content.createElement(result);

        });
      });
    });
  }

  createElement(element) {
    
    const ulItem = document.querySelector(".content__list");
    let nameCity = document.createElement("li");
    nameCity.innerHTML = `<span class="content__city-name"> ${element} </span> <button class="content__btn btnAdd">Добавить</button>`;
    ulItem.appendChild(nameCity);
    nameCity.setAttribute("class", "content__item");
    /* if (document.querySelector('.content__city-name').textContent.includes(element)) {
      return;
    }  */
      
  }
}
