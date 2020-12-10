export default class Content {
  constructor() {
    this.ulItem = document.querySelector(".content__list");
  }

  renderElement(city) {
    let nameCity = document.createElement("li");
    nameCity.innerHTML = `<span class="content__city-name"> ${city} </span> <button class="content__btn btnAdd">Добавить</button>`;
    this.ulItem.appendChild(nameCity);
    nameCity.setAttribute("class", "content__item");
  }

  markAndSearch(arr) {
    const itemsCityName = document.querySelectorAll(".content__city-name");
    const input = document.querySelector(".content__input");
    const parentItem = document.querySelector(".content__list");
  
    input.addEventListener("input", function (e) {
        e.preventDefault();
        let val = this.value.trim();
        const content = new Content();
        let matches = null;

        if (val != "" ) {
          itemsCityName.forEach(function (city) {
           
            let str = city.innerText; // выводит полностью название город край один!
              matches = arr.filter(cityName => cityName.toLowerCase().includes(val.toLowerCase()));
              let valueStringfy = String(matches);

              /* if (city.textContent === valueStringfy) {
                 
               } */
            if (!matches.length) {
              parentItem.classList.add('hide');
            } 
            if (city.innerText.search(val) >= 0 ) {
                city.innerHTML = insertMark(str,city.innerText.search(val),val.length);
                
               // content.renderElement(matches);
            };
          });
        };
        
        if (val === "") {
          itemsCityName.forEach(function (city) {
            parentItem.classList.remove('hide');
            matches = null;
            let str = city.innerText;
            city.innerHTML = insertMark(str,city.innerText.search(val),val.length);
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

