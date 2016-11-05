import React, {Component} from 'react'

class ChatBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      'username': props.username,
      'message': ''
    }
  }

  onUsernameChange(event) {
    this.setState({ 'username': event.target.value });
  }

  onMessageChange(event) {
    this.setState({ 'message': event.target.value });
  }

  render() {
    return (
      <footer>
        <input type="text"
          id="username"
          placeholder="Your Name (Optional)"
          value={ this.state.username }
          onChange={ this.onUsernameChange.bind(this) } />

        <input type="text"
          id="new-message"
          placeholder="Type a message and hit ENTER"
          value={ this.state.message }
          onChange={ this.onMessageChange.bind(this) } />
      </footer>
    );
  }
}

ChatBar.propTypes = {
  username: React.PropTypes.string
}

export default ChatBar;