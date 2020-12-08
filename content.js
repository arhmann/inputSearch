export default class Content {
  constructor() {
    this.ulItem = document.querySelector(".content__list");
    this.itemsCityName = document.querySelectorAll(".contant__city-name");
  }

  renderElement(city) {
    let nameCity = document.createElement("li");
    nameCity.innerHTML = `<span class="contant__city-name"> ${city} </span> <button class="content__btn btnAdd">Добавить</button>`;
    this.ulItem.appendChild(nameCity);
    nameCity.setAttribute("class", "content__item");
  }

  searchValue() {
    const input = document.querySelector(".content__input");
    const itemsList = document.querySelectorAll(".content__item");

    input.addEventListener("input", function (e) {
      e.preventDefault();

      let val = this.value.trim();

      if (val != "") {
        this.itemsCityName.forEach(function (city) {
          if (city.innerText.search(val) == -1) {
            itemsList.forEach(function (item) {
              item.classList.add("hide");
            });
            city.classList.add("hide");
            city.innerHTML = city.innerText;
          } else {
            city.classList.remove("hide");
            let str = city.innerText;
            city.innerHTML = insertMark(
              str,
              city.innerText.search(val),
              val.length
            );
          }
        });
      } else {
        itemsCityName.forEach(function (city) {
            const content = new Content();
            content.renderElement(arrNames[0]);
          
        });
      }
    });

    function insertMark(string, pos, len) {
      return (
        string.slice(0, pos) +
        "<mark>" +
        string.slice(pos, pos + len) +
        "</mark>" +
        string.slice(pos + len)
      );
    }
  }
}
