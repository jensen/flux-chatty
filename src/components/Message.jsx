import React, {Component} from 'react'

class Message extends Component {
  render() {
    return (
      <div className="message">
        <span className="username">{ this.props.message.username }</span>
        <span className="content">{ this.props.message.content }</span>
      </div>
    );
  }
}

Message.propTypes = {
  message: React.PropTypes.object
}

export default Message;
