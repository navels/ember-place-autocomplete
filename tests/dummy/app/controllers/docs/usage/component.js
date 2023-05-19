import Controller from '@ember/controller';
import { action } from '@ember/object';
import { later, next } from "@ember/runloop"

export default class DocsUsageComponentController extends Controller {
  constructor() {
    super(...arguments);
    this.googleAuto = null;
    this.restrictions = { country: 'co' };
  }

  _refreshPrettyResponse(blockProperty, placeDetails) {
    this.blockProperty = null;
    next(() => {
      this.blockProperty = JSON.stringify(placeDetails, undefined, 2);
    });
  }

  @action
  done() {
    let messageElement = document.getElementById('message');
    messageElement.classList.add('fade-in-element');
    this.message = 'blur blur blur';
    later(() => messageElement.classList.remove('fade-in-element'), 2000);
    later(() => this.message = null, 2100);
  }

  @action
  placeChanged(place) {
    this._refreshPrettyResponse('placeJSON', place);
    this.googleAuto = 'done';
    this.model.address = place.formatted_address;
  }

  @action
  placeChangedSecondInput(place) {
    this._refreshPrettyResponse('placeJSONSecondInput', place);
  }
}
