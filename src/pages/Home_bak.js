import React ,{ Component } from 'react';
import { connect } from 'react-redux';
import './Home.css';
class Home extends Component {
    render(){
      return (
        <div>                   
  	<div class="inline-flex justify-between  px-6 py-3  bg-white w-full h-16 " >
  	  <div class="inline-flex items-center mr-5">
      	    <img class="h-10 w-10 mr-3" src="https://labuladong.online/algo/logo.svg" />
      	    <span class="m-one text-gray-800 font-mono text-1xl tracking-widest">labuladong 的算法笔记</span>
      	  </div>
      	  <div class="flex-1">
      	    <a class="my-1 btn-sm  btn btn-ghost">
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
      	  </div>
      	  <div class="my-1 flex-1 ">
      	    <a class="text-gray-800 font-mono text-2xl tracking-widest">test1</a>
      	    <a class="text-gray-800 font-mono text-2xl tracking-widest">test2</a>
      	  </div>
  	</div> 
  	<div class="flex justify-between bg-gray-200">
          <div class="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2 inline-flex">
            <img class="h-10 w-10 mr-3" src="https://labuladong.online/algo/logo.svg" />
      	    <span class="m-auto text-gray-800 font-mono text-1xl tracking-widest">labuladong 的算法笔记</span>
          1</div>
          <div class="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
            <a class="my-1 btn-sm  btn btn-ghost">
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
          <div class="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">3</div>
        </div>
        <div class="bg-video">
          <video autoplay loop muted class="w-full h-full object-cover">
            <source src="phttps://openaicomproductionae4b.blob.core.windows.net/production-twill-01/c74791d0-75d2-48e6-acae-96d13bc97c56/paper-planes.mp4" type="video/mp4">
          </video>
        </div>
       
        </div>
      )
    }
}

export default connect(null,null)(Home);
