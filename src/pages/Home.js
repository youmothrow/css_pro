import React ,{ Component } from 'react';
import { connect } from 'react-redux';
import './Home.css';
class Home extends Component {
    render(){
      return (
        <div>
  	<div class="flex justify-between py-3 bg-white w-full h-16 border-b-2 border-red-400">
          <div class="inline-flex items-center text-gray-700 text-center bg-gray-400 px-6 py-2">
            <img class="h-10 w-10 mr-3 min-w-11" src="https://labuladong.online/algo/logo.svg" />
      	    <span class="m-auto text-gray-800 font-mono text-1xl tracking-widest content hidden sm:block">labuladong 的算法笔记</span>
          </div>
          <div class="text-gray-700 bg-gray-400 content hidden sm:block ">
            <a class="my-1 btn-sm  btn btn-ghost hover:border-b-1">
      	      <span class="text-center" >
      	      </span>首页
      	    </a>
      	    <button class="dropdown " >
      	      <span class="my-1 btn-sm btn btn-ghost ">
      	        <span >
      	        </span>课程/打卡
      	      </span>
      	      <ul class="p-2 shadow menu dropdown-content z-[1] rounded-box w-40">
    		  <li><a>数据结构精品课</a></li>
    		  <li><a>二叉树递归专题课</a></li>
    		  <li><a>30 天刷题打卡</a></li>
  	      </ul>
      	    </button>
          2</div>
          <div class="inline-flex text-gray-700 bg-red-400">
            <a class="my-1 text-gray-800 font-mono text-2xl tracking-widest">test1</a>
      	    <a class="my-1 text-gray-800 font-mono text-2xl tracking-widest">test2</a>
      	  3</div>
          </div>
        </div>
      )
    }
}

export default connect(null,null)(Home);
