import React, {Component} from 'react'

import {ChatActions} from '../flux/actions.js'

class ChatBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      'username': props.username,
      'message': ''
    }

    this.onUsernameKey = this.onUsernameKey.bind(this);
    this.onMessageKey = this.onMessageKey.bind(this);
    this.onUsernameChange = this.onUsernameChange.bind(this);
    this.onMessageChange = this.onMessageChange.bind(this);
  }

  onUsernameChange(event) {
    this.setState({ 'username': event.target.value });
  }

  onMessageChange(event) {
    this.setState({ 'message': event.target.value });
  }

  onUsernameKey(event) {
    if(event.key === 'Enter' || event.key === 'Tab') {
      ChatActions.changeUsername(this.state.username)
    }
  }

  onMessageKey(event) {
    if(event.key === 'Enter') {
      ChatActions.postMessage(this.state.message);
      this.setState({ 'message': '' });
    }
  }

  render() {
    return (
      <footer>
        <input type="text"
          id="username"
          placeholder="Your Name (Optional)"
          value={ this.state.username }
          onKeyDown={ this.onUsernameKey }
          onChange={ this.onUsernameChange } />

        <input type="text"
          id="new-message"
          placeholder="Type a message and hit ENTER"
          value={ this.state.message }
          onKeyDown={ this.onMessageKey }
          onChange={ this.onMessageChange } />
      </footer>
    );
  }
}

ChatBar.propTypes = {
  username: React.PropTypes.string
}

export default ChatBar;
