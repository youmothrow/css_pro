import React ,{ Component } from 'react';
import store from './store';
import { Provider } from 'react-redux';

//import Home from './pages/Home';
//import Flextest from './pages/Flextest';
import Constview from './pages/Constview';

class App extends Component {
  render(){
    return (
      <Provider store={store}>
        {/*<Home />*/}
        {/*<Flextest />*/}
        <Constview />
      </Provider>
    )
  }
}

export default App;
