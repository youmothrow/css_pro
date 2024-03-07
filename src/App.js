import React ,{ Component } from 'react';
import store from './store';
import { Provider } from 'react-redux';

//import Home from './pages/Home';
import Flextest from './pages/Flextest';


class App extends Component {
  render(){
    return (
      <Provider store={store}>
        {/*<Home />*/}
        <Flextest />
      </Provider>
    )
  }
}

export default App;
