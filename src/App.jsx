import React, {Component} from 'react';

import MessageList from './components/MessageList.jsx'
import ChatBar from './components/ChatBar.jsx'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      'username': 'Bob',
      'messages': [
        { 'username': 'Anonymous', 'content': 'Here is a sample message.'}
      ]
    }
  }

  render() {
    return (
      <div>
        <nav>
          <h1>Chatty</h1>
        </nav>
        <MessageList messages={ this.state.messages } />
        <ChatBar username={ this.state.username } />
      </div>
    );
  }
}

export default App;
