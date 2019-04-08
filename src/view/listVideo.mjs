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

  render(videos) {
    let html = '';
    if (videos != null) {
      if (videos.length != 0) {
        let list = videos
          .map(video => `<li><a data-id="${video.id}" data-type="${video.type}">${video.title}</a></li>`)
          .join(' ');
        html = `<ul>${list}</ul>`;
      } else {
        html = '<p>За веденим параметром результату не має</p>'
      }

    } else {
      html = '<h1>Виникла помилка при отриманні інформації.</h1>';
    }
    this
      .$el
      .insertAdjacentHTML('afterbegin', html);
  }
}