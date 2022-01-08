import document from 'document';
import { switchPage } from '../navigation';

let $button = null;
let $buttonNext = null;

export function destroy() {
  $button = null;
  $buttonNext = null;
}

export function init() {
  $button = document.getElementById('back-button');
  $buttonNext = document.getElementById('next-button');

  $button.onclick = () => {
    destroy();
    switchPage('velvet');
  };

  $buttonNext.onclick = () => {
    destroy();
    switchPage('crawlin');
  };
}
