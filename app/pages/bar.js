import document from 'document';
import { switchPage } from '../navigation';
import { getStateItem, setStateCallback, removeStateCallback } from '../state';

let $button = null;
let $letter = null;
let $timestamp = null;

function doSomething() {
  console.log('hallo bar');
}

function draw() {
  const letter = getStateItem('letter');
  const timestamp = getStateItem('companionTimestamp');

  $timestamp.text = timestamp;

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
  $timestamp = null;
  removeStateCallback('bar');
}

export function init() {
  console.log('init bar page');
  $letter = document.getElementById('letter');
  $timestamp = document.getElementById('timestamp');
  $button = document.getElementById('back-button');
  $button.onclick = () => {
    destroy();
    switchPage('index');
  };

  setStateCallback('bar', draw);
  doSomething();
  draw();
}
