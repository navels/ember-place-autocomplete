import Service from '@ember/service';

export default class GooglePlaceAutocomplateManagerService extends Service {
  constructor() {
    super(...arguments);
    this.numberOfActiveAutoCompleteFields = 0;
  }

  /**
   * @description Increments the counter of active components.
   * Intended to be used everytime a new place-autocomplete-filed is
   * instanciated.
   */
  register() {
    this.numberOfActiveAutoCompleteFields += 1;
  }

  /**
   * @description Decrements the counter of active components.
   * Intended to be used everytime a new place-autocomplete-filed is
   * going to be destroyed.
   */
  unregister() {
    this.numberOfActiveAutoCompleteFields -= 1;
  }

  /**
   * @description Cleanup DOM when ALL component instances of place-autocomplete-field
   * are removed from the DOM. If there are still components active, it does nothing.
   *
   * @returns { Boolean } - Indicates whether the DOM was cleaned or not.
   */
  removePlacesAutoCompleteContainersIfRequired() {
    if (!document || this.numberOfActiveAutoCompleteFields > 0) {
      return false;
    }

    const pacContainers = document.querySelectorAll('.pac-container');

    for (let index = 0; pacContainers.length > index; index++) {
      pacContainers[index].parentNode.removeChild(pacContainers[index]);
    }

    return true;
  }
}