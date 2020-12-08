export default class Api {
  constructor() {
    this.response = null;
    this.arrCityNames = null;
    this.url ="https://raw.githubusercontent.com/cscart/apply-for-job/master/frontend-developer/files/003-rate-areas.json";
  }

 async init() {
        console.log('APIinitAPIclass')
        const api = new Api();
        const res = await api.fetchSend();
        return res;
  }

  async fetchData(url, param) {
    try {
      this.response = param === undefined ? await fetch(url) : await fetch(url, param);
        this.arrCityNames = this.response.json(this.response);
        console.log('FETCHdata')
      if (this.response.ok) {
        try {
          return await this.response.json(this.response);
        } catch (e) {
          return "bad-response";
        }
      } else {
        return this.response.status;
      }
    } catch (e) {
      return "server-error";
    }
    
  }

  async fetchSend() {   
    console.log('FETCHsend')
    return this.fetchData(this.url);
  }
}
