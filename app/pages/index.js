import document from 'document';
import { switchPage } from '../navigation';

let $buttonCafe = null;
let $buttonBar = null;
let $buttonClub = null;

export function destroy() {
  $buttonCafe = null;
  $buttonBar = null;
  $buttonClub = null;
}

export function init() {
  $buttonCafe = document.getElementById('cafe-button');
  $buttonBar = document.getElementById('bar-button');
  $buttonClub = document.getElementById('club-button');

  $buttonCafe.onclick = () => {
    switchPage('cafe', true);
  };
  $buttonBar.onclick = () => {
    switchPage('bar');
  };
  $buttonClub.onclick = () => {
    switchPage('club');
  };
}
