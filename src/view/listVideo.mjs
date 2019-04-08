import Container from "./container.mjs";

export default class ListVideo extends Container {
  constructor(selectorId) {
    super(selectorId);

    this._event = new Event('click');

    this
      .$el
      .addEventListener('click', event => {
        if (event.target.tagName.toUpperCase() === 'A') {
          this._event.keyVideo = event.target.dataset.id;
          this._event.typeVideo = event.target.dataset.type;
          this
            .$el
            .dispatchEvent(this._event);
        };
      });
  }

  render(movies) {
    let list = movies
      .map(movie => `<li><a data-id="${movie.id}" data-type="${movie.type}">${movie.title}</a></li>`)
      .join(' ');
    this
      .$el
      .insertAdjacentHTML('afterbegin', `<ul>${list}</ul>`);
  }
}