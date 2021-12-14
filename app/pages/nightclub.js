import document from 'document';
import { switchPage } from '../navigation';

let $button = null;
let $buttonRandom = null;

export function destroy() {
  $button = null;
  $buttonRandom = null;
}

export function init() {
  $button = document.getElementById('back-button');
  $buttonRandom = document.getElementById('random-button');

  $button.onclick = () => {
    destroy();
    switchPage('index');
  };

  $buttonRandom.onclick = () => {
    destroy();
    switchPage('random');
  };
}
