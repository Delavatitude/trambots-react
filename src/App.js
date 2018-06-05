import React, { Component } from 'react';
import Main from './Main.js';
import './App.css';
import MessengerCustomerChat from 'react-messenger-customer-chat';

class App extends Component {
  render() {
    return (
    	<div>
      		<Main></Main>
      		<MessengerCustomerChat
		      pageId="1842256066012403"
		      appId="1831084163805835"
		      htmlRef="site"
		      logged_in_greeting="Hi! Coucou toi 😜"
  			  logged_out_greeting="Hi! Coucou toi 😜"
		    />
		</div>
    );
  }
}

export default App;
