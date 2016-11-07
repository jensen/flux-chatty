class Listener {
  constructor() {
    this.id = 0;
    this.listeners = {};
  }

  addEventListener(cb) {
    this.listeners[this.id] = cb;
    return this.id++;
  }

  removeEventListener(id) {
    delete this.listeners[id];
  }

  emitEvent(data) {
    for(let listener in this.listeners) {
      this.listeners[listener](data);
    }
  }
}

export default Listener;
