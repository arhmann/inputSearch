import Api from './api.js';
import Content from './content.js';

const api = new Api();
console.log('APIinitMain')
api.init();
const content = new Content();
content.renderElement();
