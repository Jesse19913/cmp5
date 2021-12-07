import document from 'document';
import { getLocationName } from '../commands';
import { getStateItem, setStateCallback, removeStateCallback } from '../state';

let $button = null;
let $locationName = null;

function doSomething() {
  console.log('hallo cafe');
}

function draw() {
  $locationName.text = getStateItem('location');
}

export function destroy() {
  console.log('destroy cafe page');
  $locationName = null;
  $button = null;
  removeStateCallback('cafe');
}

export function init() {
  console.log('init cafe page');
  $locationName = document.getElementById('location');
  $button = document.getElementById('back-button');
  $button.onclick = () => {
    destroy();
    document.history.back();
  };

  doSomething();
  getLocationName();
  setStateCallback('cafe', draw);
  // draw();
}
