import document from 'document';
import { switchPage } from '../navigation';

let $button = null;
let $buttonDislike = null;
let $buttonLike = null;

export function destroy() {
  $button = null;
  $buttonDislike = null;
  $buttonLike = null;
}

export function init() {
  $button = document.getElementById('back-button');
  $buttonDislike = document.getElementById('dislike-button');
  $buttonLike = document.getElementById('like-button');

  $button.onclick = () => {
    destroy();
    switchPage('club');
  };

  $buttonDislike.onclick = () => {
    destroy();
    switchPage('outofplaces');
  };

  $buttonLike.onclick = () => {
    destroy();
    switchPage('navigationclub');
  };
}
