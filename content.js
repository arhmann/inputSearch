import Api from './api.js';

export default class Content extends Api{

    constructor(){
        super()
        this.ulItems = document.querySelector(".content__list");
        this.itemsList = document.querySelectorAll(".content__list li");
        this.itemsCityName = document.querySelectorAll(".content__list li span");
        this.responseData = null;
    }

    init(){}

    async renderElement(){
         // const content = new Content();
         // console.log(content)
         console.log('Render Element')
          if (this.arrCityNames == null){
              return this.arrCityNames
          } else {
              return responseData = this.arrCityNames;
          }
    }


}



