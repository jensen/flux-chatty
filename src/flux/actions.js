import Dispatcher from './dispatcher.js'

import {ACTION_CHAT_POST_MESSAGE, ACTION_CHAT_CHANGE_USERNAME} from './constants.js'

class ChatActions {
  constructor() {}

  static postMessage(message) {
    Dispatcher.emitEvent({
      type: ACTION_CHAT_POST_MESSAGE,
      payload: {
        message: message
      }});
  }

  static changeUsername(username) {
    Dispatcher.emitEvent({
      type: ACTION_CHAT_CHANGE_USERNAME,
      payload: {
        username: username
      }});
  }
}

export {
  ChatActions
}
