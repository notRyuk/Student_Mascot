import React from 'react';

import './App.css';
import Header from './components/Header';


class App extends React.Component {
  constructor({}) {
    super()
  }

  render = () => {
    return (
      <div className='App'>
        <Header />
      </div>
    )
  }
}

export default App;
