import document from 'document';
import { switchPage } from '../navigation';

let $button = null;
let $buttonBeerlovers = null;

export function destroy() {
  $button = null;
  $buttonBeerlovers = null;
}

export function init() {
  $button = document.getElementById('back-button');
  $buttonBeerlovers = document.getElementById('beerlovers-button');

  $button.onclick = () => {
    destroy();
    switchPage('index');
  };

  $buttonBeerlovers.onclick = () => {
    destroy();
    switchPage('beerlovers');
  };
}
