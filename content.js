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

  markTextSearch() {
    const itemsCityName = document.querySelectorAll(".content__city-name");
    document
      .querySelector(".content__input")
      .addEventListener("input", function (e) {
        e.preventDefault();
        console.log('не пусто')
        let val = this.value.trim();
        let firstString = val[0];
        if (val != "") {
          itemsCityName.forEach(function (city) {  
            let str = city.innerText;
            console.log(city.innerText.search(val))
            if (city.innerText.search(val) >= 0) {
              city.innerHTML = insertMark(str,city.innerText.search(val),val.length);
            }
          });
        }
        if (val === "") {
          console.log('пусто')
          itemsCityName.forEach(function (city) {
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

/* if(val != ''){
     itemsCityName.forEach(function(city){
         if (city.innerText.search(val) == -1){    
         } 
             let str = city.innerText;
             city.innerHTML = insertMark(str, city.innerText.search(val), val.length)
         }
     });
    } else {
     itemsCityName.forEach(function(city){
         city.classList.remove('hide');
         city.innerHTML = city.innerText;
      })
   }
 }); */
