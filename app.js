const input = document.querySelector('.content__input');

input.addEventListener('input', function (e) {
 e.preventDefault();
   let val = this.value.trim();
   let itemsCityName = document.querySelectorAll('.content__list li span');
   let itemsList = document.querySelectorAll('.content__list li');
   let btnsAdd = document.querySelectorAll('.btnAdd');

   if(val != ''){

    itemsList.forEach(function(item){
     //console.log(item.textContent )
  
     itemsCityName.forEach(function(city){
         if (city.textContent == val ) {
            console.log('совпадение')
         }
       // console.log(city.textContent )
      })
           
        

    });


    itemsCityName.forEach(function(city){
        if (city.innerText.search(val) == -1){
            itemsList.forEach(function(item){
                item.classList.add('hide');
             });
            city.classList.add('hide'); 
            city.innerHTML = city.innerText;
        } else {
            city.classList.remove('hide');
            for(let i = 0; i < itemsList.length; i++){
                itemsList[i].style.display = 'flex';
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
});

function insertMark(string, pos, len){
    return string.slice(0, pos) + '<mark>' + string.slice(pos, pos+len) + '</mark>' + string.slice(pos + len);
}

