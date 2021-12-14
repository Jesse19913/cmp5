import document from 'document';
import { switchPage } from '../navigation';
import { getStateItem, setStateCallback, removeStateCallback } from '../state';

let $button = null;
let $letter = null;
let $buttonBeerlovers = null;

function draw() {
  const letter = getStateItem('letter');

  if (letter) {
    $letter.text = letter;
  } else {
    $letter.text = 'set letter';
  }
}

export function destroy() {
  console.log('destroy bar page');
  $button = null;
  $letter = null;
  $buttonBeerlovers = null;
  removeStateCallback('bar');
}

export function init() {
  console.log('init bar page');
  $letter = document.getElementById('letter');
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

  setStateCallback('bar', draw);
  draw();
}
