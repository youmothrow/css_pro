import React ,{ Component } from 'react';
import { connect } from 'react-redux';
import './Home.css';
class Home extends Component {
    render(){
      return (
        <div class="relative bg-gray-50">
        <h1 class="text-black-300 text-center">Hello world</h1>
        <a href="http://localhost:3000/" class="text-sky-500 hover:text-sky-600">Read the docs &rarr;</a>
        </div>
      )
    }
}

export default connect(null,null)(Home);
