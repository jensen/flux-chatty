import Listener from '../utilities/listener.js'

import Dispatcher from './dispatcher.js'

import {ACTION_CHAT_POST_MESSAGE, ACTION_CHAT_CHANGE_USERNAME} from './constants.js'

class ChatStore extends Listener {

  constructor() {
    super();

    this.data = {
      username: '',
      messages: []
    };

    Dispatcher.addEventListener(this.onActionDispatch.bind(this));

    this.actions = {};
    this.actions[ACTION_CHAT_POST_MESSAGE] = this.postMessage.bind(this);
    this.actions[ACTION_CHAT_CHANGE_USERNAME] = this.changeUserName.bind(this);
  }

  onActionDispatch(action) {
      this.actions[action.type](action.payload);
  }

  postMessage(payload) {
    this.data.messages.push({ username: this.data.username, content: payload.message});
    this.emitEvent();
  }

  changeUserName(payload) {
    this.data.username = payload.username;
    this.emitEvent();
  }

  get() {
    return this.data;
  }
}

export default ChatStore;
