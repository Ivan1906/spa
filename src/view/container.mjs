export default class Container {
  constructor(id) {
    this.$el = document.getElementById(id);
  };

  clean() {
    this.$el.innerHTML = '';
  };
}