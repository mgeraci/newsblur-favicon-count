/* global document */

(function NewsblurFaviconCount() {
  this.construct = () => {
    this.timer = setInterval(this.poll, 500);
    this.poll();

    return true;
  };

  this.poll = () => {
    const count = this.getUnreadCount();

    console.log(count); // eslint-disable-line no-console
  };

  this.getUnreadCount = () => {
    const titleCount = document.title.match(/\((.*)\)/);
    return titleCount ? titleCount[1] : false;
  };

  this.toString = () => '[object NewsblurFaviconCount]';

  return this.construct();
}());
