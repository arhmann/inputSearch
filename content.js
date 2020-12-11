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
    const content = new Content();

    res.then(data => {
      data.forEach((names) => {
        arrNames.push(names.name);
        input.addEventListener("input", () => {
          if (input.value.length < 3 || input.value === "") return;
          const matches = arrNames.filter((cities) =>
            cities.toLowerCase().includes(input.value.toLowerCase())
          );
          content.createElement(matches);
          console.log('promise resolve')
        });
  
      });
    });
    res.then(data => {
      const content = new Content();
      const resultPromise = new Promise((resolve, reject) => {
        //console.log(arrNames)
        //content.listenerButton();
        console.log('Promise reject')
      })
      
    })
  }

  createElement(elements) {
    const ulParent = document.querySelector(".content__list");
    ulParent.innerHTML = "";
    let nameCity = document.createElement("li");
    elements.forEach((el) => {
      nameCity.innerHTML = `<span class="content__city-name"> ${el} </span> <button class="content__btn btnAdd">Добавить</button>`;
      ulParent.appendChild(nameCity);
      nameCity.setAttribute("class", "content__item");
    });
  }

  cleanDOM(clean) {
    clean.innerHTML = "";
  }

  defaultDOM(renderElement) {
    const content = new Content();
    for (let i = 0; i < 4; i++) {
      content.render(renderElement[i]);
    }
  }

  listenerButton() {
    const btn = document.querySelector(".content__btn");
    btn.addEventListener("click", (e) => {
      console.log(e);
    });
  }

}
