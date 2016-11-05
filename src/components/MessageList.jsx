import React, {Component} from 'react'

import Message from './Message.jsx'

class MessageList extends Component {
  render() {
    let messages = this.props.messages.map((message, index) => {
      return (
        <Message key={index} message={ message } />
      );
    });

    return (
      <div id="message-list">
        { messages }
      </div>
    );
  }
}

MessageList.propTypes = {
  messages: React.PropTypes.array
}

export default MessageList;
