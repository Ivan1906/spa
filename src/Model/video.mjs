export default class Video {
  constructor(id, title, type = undefined, overview = undefined, poster = undefined) {
    this.id = id;
    this.title = title;
    this.type = type;
    this.overview = overview;
    this.poster = poster;
  }
}