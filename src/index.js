/* global document */

import FaviconCount from '../favicon_count_base/dist/FaviconCountBase';
// import FaviconCount from '../../favicon-count-base/src';

class NewsblurFaviconCount {
  constructor() {
    this.timer = setInterval(this.poll.bind(this), 500);
    this.faviconCount = new FaviconCount();
    this.poll();
  }

  poll() {
    const count = this.getUnreadCount();
    this.faviconCount.render(count);
  }

  getUnreadCount() {
    const titleCount = document.title.match(/\((.*)\)/);
    return titleCount ? titleCount[1] : false;
  }
}

(function newsblurExtension() {
  return new NewsblurFaviconCount();
}());
