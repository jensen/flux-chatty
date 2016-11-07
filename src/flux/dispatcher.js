class Dispatcher {
  constructor() {
    this.listeners = [];
  }

  addListener(cb) {
    this.listeners.push(cb);
  }

  dispatch(action) {
    this.listeners.forEach((cb) => cb(action));
  }
}

export default new Dispatcher();