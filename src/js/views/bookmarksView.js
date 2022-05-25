import { mark } from 'regenerator-runtime';
import icons from 'url:../../img/icons.svg';
import View from './View';
import previewView from './previewView.js';

class BookmarksView extends View {
  _parentEl = document.querySelector('.bookmarks__list');
  _errorMessage = 'No bookmarks yet. Find a nice recipe and bookmark it.';
  _message = '';

  addHandlerRender(handler) {
    window.addEventListener('load', handler);
  }

  _generateMarkup() {
    // ***Set render parameter = false, so return string for later join together
    return this._data
      .map(bookmark => previewView.render(bookmark, false))
      .join('');
  }
}

export default new BookmarksView();
