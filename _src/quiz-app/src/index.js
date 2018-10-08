import { App } from './app';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

(() => {
    new App().init();
    registerServiceWorker();
})();
