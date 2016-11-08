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

    this.actions = {};
    this.actions[ACTION_CHAT_POST_MESSAGE] = this.postMessage.bind(this);
    this.actions[ACTION_CHAT_CHANGE_USERNAME] = this.changeUserName.bind(this);

    Dispatcher.addEventListener(this.onActionDispatch.bind(this));
  }

  onActionDispatch(action) {
    this.actions[action.type](action.payload);
    this.emitEvent();
  }

  postMessage(payload) {
    this.data.messages.push({ username: this.data.username, content: payload.message});
  }

  changeUserName(payload) {
    this.data.username = payload.username;
  }

  get() {
    return this.data;
  }
}

export default ChatStore;
