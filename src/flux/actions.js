import Dispatcher from './dispatcher.js'

import {ACTION_CHAT_POST_MESSAGE, ACTION_CHAT_CHANGE_USERNAME} from './constants.js'

class Action {
  constructor(type, data) {
    this.type = type;
    this.data = data;
  }

  getType() {
    return this.type;
  }

  getData() {
    return this.data;
  }
}

class ChatActions {
  constructor() {}

  static postMessage(message) {
    Dispatcher.dispatch(new Action(ACTION_CHAT_POST_MESSAGE, {
      message: message
    }));
  }

  static changeUsername(username) {
    Dispatcher.dispatch(new Action(ACTION_CHAT_CHANGE_USERNAME, {
      username: username
    }));
  }
}

export {
  ChatActions
}