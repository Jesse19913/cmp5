import document from 'document';
import { switchPage } from '../navigation';
import { getStateItem, setStateCallback, removeStateCallback } from '../state';

let $button = null;
let $letter = null;
let $buttonVelvet = null;

function draw() {
  const letter = getStateItem('letter');

  if (letter) {
    $letter.text = letter;
  } else {
    $letter.text = 'set letter';
  }
}

export function destroy() {
  console.log('destroy cafe page');
  $button = null;
  $letter = null;
  $buttonVelvet = null;
  removeStateCallback('cafe');
}

export function init() {
  console.log('init cafe page');
  $letter = document.getElementById('letter');
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

  setStateCallback('cafe', draw);
  draw();
}
