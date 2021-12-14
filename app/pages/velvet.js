import document from 'document';
import { switchPage } from '../navigation';

let $button = null;

export function destroy() {
  $button = null;
}

export function init() {
  $button = document.getElementById('back-button');

  $button.onclick = () => {
    destroy();
    switchPage('cafe');
  };
}
