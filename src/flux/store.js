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
  }

  onActionDispatch(action) {
      switch(action.getType()) {
      case ACTION_CHAT_POST_MESSAGE:
        this.postMessage(action.getData().message);
        break;
      case ACTION_CHAT_CHANGE_USERNAME:
        this.changeUserName(action.getData().username);
        break;
    }
  }

  postMessage(message) {
    this.data.messages.push({ username: this.data.username, content: message});
    this.emitEvent();
  }

  changeUserName(username) {
    this.data.username = username;
    this.emitEvent();
  }

  get() {
    return this.data;
  }
}

export default ChatStore;
