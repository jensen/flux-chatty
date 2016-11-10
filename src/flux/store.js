import Listener from '../utilities/listener.js'
import Dispatcher from './dispatcher.js'

import {ACTION_CHAT_POST_MESSAGE, ACTION_CHAT_CHANGE_USERNAME} from './constants.js'

const CHAT_TYPE_MESSAGE = 'message';
const CHAT_TYPE_NOTIFICATION = 'notification';

class ChatStore extends Listener {

  constructor() {
    super();

    this.data = {
      username: 'Anonymous',
      messages: []
    };

    this.actions = {};
    this.actions[ACTION_CHAT_POST_MESSAGE] = this.postMessage.bind(this);
    this.actions[ACTION_CHAT_CHANGE_USERNAME] = this.changeUserName.bind(this);

    Dispatcher.addEventListener(this.onActionDispatch.bind(this));

    this.setupWebSocket();
  }

  setupWebSocket() {
    this.socket = new WebSocket('ws://localhost:4000');

    this.socket.onopen = (/* event */) => {
      this.socket.onmessage = (event) => {
        this.data.messages.push(JSON.parse(event.data));
        this.emitEvent();
      }
    }
  }

  onActionDispatch(action) {
    this.actions[action.type](action.payload);
  }

  postMessage(payload) {
    this.socket.send(JSON.stringify({
      type: CHAT_TYPE_MESSAGE,
      username: this.data.username, content: payload.message
    }));
  }

  changeUserName(payload) {
    this.socket.send(JSON.stringify({
      type: CHAT_TYPE_NOTIFICATION,
      username: '',
      content: `${this.data.username} has changed their name to ${payload.username}.`
    }));
    this.data.username = payload.username;
  }

  get() {
    return this.data;
  }
}

export default ChatStore;
