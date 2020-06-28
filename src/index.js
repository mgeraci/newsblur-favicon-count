/* global document */

class NewsblurFaviconCount {
  constructor() {
    this.timer = setInterval(this.poll.bind(this), 500);
    this.poll();
  }

  poll() {
    const count = this.getUnreadCount();
    console.log(count); // eslint-disable-line no-console
  }

  // eslint-disable-next-line class-methods-use-this
  getUnreadCount() {
    const titleCount = document.title.match(/\((.*)\)/);
    return titleCount ? titleCount[1] : false;
  }
}

(function newsblurExtension() {
  return new NewsblurFaviconCount();
}());
