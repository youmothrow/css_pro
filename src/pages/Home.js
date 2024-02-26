import React ,{ Component } from 'react';
import { connect } from 'react-redux';
import './Home.css';
class Home extends Component {
    render(){
      return (
        <div class="
          p-6 max-w-sm mx-auto 
         bg-white rounded-xl 
          shadow-lg flex items-center 
          space-x-4">
        <h1 class=" 
          text-xl font-medium 
          text-black
          "
        >
          个人博客
        </h1>
        <a href="http://localhost:3000/" 
          class="text-sky-500
           hover:text-sky-600"
        >
          Read the docs &rarr;
        </a>
        </div>
      )
    }
}

export default connect(null,null)(Home);
