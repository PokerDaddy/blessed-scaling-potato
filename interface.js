const blessed = require('blessed');

class Interface {
  constructor() {
    this.blessed = blessed;
    this.screen = blessed.screen({
      smartCSR: true
    });
    this.screen.title = 'Scaling Potato Client';
  }

  clear() {
    this.screen.children.forEach((child) => {
      this.screen.remove(child);
    })
  }

  showProfileDialog() {
    this.clear();

  }
}

module.exports = Interface;
