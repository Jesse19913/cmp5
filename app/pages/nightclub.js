import document from 'document';
import { switchPage } from '../navigation';
import { getStateItem, setStateCallback, removeStateCallback } from '../state';

let $button = null;
let $letter = null;
let $buttonRandom = null;

function draw() {
  const letter = getStateItem('letter');

  if (letter) {
    $letter.text = letter;
  } else {
    $letter.text = 'set letter';
  }
}

export function destroy() {
  console.log('destroy club page');
  $button = null;
  $letter = null;
  $buttonRandom = null;
  removeStateCallback('club');
}

export function init() {
  console.log('init clib page');
  $letter = document.getElementById('letter');
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

  setStateCallback('club', draw);
  draw();
}
