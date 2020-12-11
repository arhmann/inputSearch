import Api from "./api.js";

export default class Content extends Api {
  constructor() {
    super();
    this.url =
      "https://raw.githubusercontent.com/cscart/apply-for-job/master/frontend-developer/files/003-rate-areas.json";
  }

  searchValue() {
    const api = new Api();
    const res = api.fetchData(this.url);
    const arrNames = [];
    const input = document.querySelector(".content__input");

    res.then(function (ajaxNames) {
      ajaxNames.forEach((names) => {
        arrNames.push(names.name);
        const content = new Content();

        input.addEventListener("input", () => {
          if (input.value === "" || input.value.length < 3) return;
           const matches = arrNames.filter((cities) =>
            cities.toLowerCase().includes(input.value.toLowerCase())
          );
           content.render(matches);
        });
      });
    });
  }

  render(elements) {
    const ulItem = document.querySelector(".content__list");
    ulItem.innerHTML = '';
    let nameCity = document.createElement("li");
    if(nameCity)
    elements.forEach(el => {
      nameCity.innerHTML = `<span class="content__city-name"> ${el} </span> <button class="content__btn btnAdd">Добавить</button>`;
      ulItem.appendChild(nameCity);
      nameCity.setAttribute("class", "content__item");
    })    
  }
}
