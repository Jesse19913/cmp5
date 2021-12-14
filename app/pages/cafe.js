import document from 'document';
import { switchPage } from '../navigation';

let $button = null;
let $buttonVelvet = null;

export function destroy() {
  $button = null;
  $buttonVelvet = null;
}

export function init() {
  $button = document.getElementById('back-button');
  $buttonVelvet = document.getElementById('velvet-button');

  $button.onclick = () => {
    destroy();
    switchPage('index');
  };

  $buttonVelvet.onclick = () => {
    destroy();
    switchPage('velvet');
  };
}
