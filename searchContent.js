
const input = document.querySelector(".content__input");
let itemsList = document.querySelectorAll(".content__list li");
let itemsCityName = document.querySelectorAll(".content__list li span");

input.addEventListener("input", function (e) {
  e.preventDefault();

  let val = this.value.trim();

  if (val != "") {
  
    itemsCityName.forEach(function (city) {

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
      city.classList.remove("hide");
      city.innerHTML = city.innerText;
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

  /*   itemsList.forEach(function(item){
  
     itemsCityName.forEach(function(city){
         if (city.textContent == val ) {
            console.log('совпадение')
         }
      })
    }); */

   