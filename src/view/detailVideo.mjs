import Container from "./container.mjs";
import {config} from '../config/settings.mjs';

export default class DetailVideo extends Container {
  constructor(selector) {
    super(selector);
  }

  renderRecom(recommends) {
    let html = '';
    if (recommends != null) {
      let list = recommends
        .map(recom => `<li><a data-id="${recom.id}">${recom.title}</a></li>`)
        .join(' ');
      html = `<ul>${list}</ul>`;
    } else {
      html = '<h1>Інформації не має</h1>';
    };

    this
      .$el
      .querySelector('#recommendation')
      .insertAdjacentHTML('afterbegin', html);
  }

  render(video) {
    let html = '';
    if (video != null) {
      html = `<figure>
                    <img src="${video.poster
        ? config.baseUrlImage + video.poster
        : ''}">
                  </figure>
                  <h1>${video.title}</h1>
                  <p>${video.overview}</p>
                  <h2>Recommendations</h2>
                  <aside id="recommendation"></aside>
      `;
    } else {
      html = '<h1>Інформації не має</h1>';
    }

    this
      .$el
      .insertAdjacentHTML('afterbegin', html);
  }
}