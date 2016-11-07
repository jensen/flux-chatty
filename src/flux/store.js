import Dispatcher from './dispatcher.js'

import {ACTION_CHAT_POST_MESSAGE, ACTION_CHAT_CHANGE_USERNAME} from './constants.js'

class ChatStore {

  constructor(){
    this.listeners = {};

    this.data = {
      username: '',
      messages: []
    };

    Dispatcher.addListener(this.onActionDispatch.bind(this));
  }

  addEventListener(cb) {
    this.listeners[ChatStore.listenerId] = cb;
    return ChatStore.listenerId++;
  }

  removeEventListener(id) {
    delete this.listeners[id];
  }

  emitEvent() {
    for(let listener in this.listeners) {
      this.listeners[listener]();
    }
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

ChatStore.listenerId = 0;

export default ChatStore;