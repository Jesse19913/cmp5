import document from 'document';
import { switchPage } from '../navigation';
import { getStateItem, setStateCallback, removeStateCallback } from '../state';

let $button = null;
let $letter = null;

function draw() {
  const letter = getStateItem('letter');

  if (letter) {
    $letter.text = letter;
  } else {
    $letter.text = 'set letter';
  }
}

export function destroy() {
  console.log('destroy beerlovers page');
  $button = null;
  $letter = null;
  removeStateCallback('beerlovers');
}

export function init() {
  console.log('init beerlovers page');
  $letter = document.getElementById('letter');
  $button.onclick = () => {
    destroy();
    switchPage('bar');
  };

  setStateCallback('beerlovers', draw);
  draw();
}
