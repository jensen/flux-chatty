import React, {Component} from 'react';

import MessageList from './components/MessageList.jsx';
import ChatBar from './components/ChatBar.jsx';

import ChatStore from './flux/store.js';


class App extends Component {
  constructor(props) {
    super(props);

    this.store = new ChatStore();
    this.state = this.store.get();
  }

  componentDidMount() {
    this.listener = this.store.addEventListener(this.onStoreUpdate.bind(this));
  }

  componentWillUnmount() {
    this.store.removeEventListener(this.listener);
  }

  onStoreUpdate() {
    this.setState(this.store.get());
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
