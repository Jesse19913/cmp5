import document from 'document';
import { switchPage } from '../navigation';

let $buttonCafe = null;
let $buttonBar = null;
let $buttonNightclub = null;

export function destroy() {
  $buttonCafe = null;
  $buttonBar = null;
  $buttonNightclub = null;
}

export function init() {
  $buttonCafe = document.getElementById('cafe-button');
  $buttonBar = document.getElementById('bar-button');
  $buttonNightclub = document.getElementById('nightclub-button');

  $buttonCafe.onclick = () => {
    switchPage('cafe', true);
  };
  $buttonBar.onclick = () => {
    switchPage('bar');
  };
  $buttonNightclub.onclick = () => {
    switchPage('nightclub');
  };
}
