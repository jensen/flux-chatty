import React, {Component} from 'react'

class Message extends Component {
  render() {
    if(this.props.message.type === 'message') {
      return  (
        <div className="message">
          <span className="username">{ this.props.message.username }</span>
          <span className="content">{ this.props.message.content }</span>
        </div>
      );
    } else {
      return (
        <div className="message system">
          <span className="content">{ this.props.message.content }</span>
        </div>
      );
    }
  }
}

Message.propTypes = {
  message: React.PropTypes.object
}

export default Message;
