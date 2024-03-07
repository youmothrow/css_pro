import React ,{ Component } from 'react';
import { connect } from 'react-redux';
import './Home.css';
class Flextest extends Component {
    render(){
      return (
        <div>
			<div className="min-h-screen flex-items-center bg-purple-500">
				<div className="flex-1 max-w-4xl mx-auto p-10">
					{/*<ul className="grid grid-cols-1 grid-4 sm:grid-cols-2 md:grid-cols-3 md:gap-8 ">
					<ul className="grid grid-cols-3 gap-x-8 gap-y-12">
					<ul className="grid grid-cols-6 grid-rows-4 gap-4 grid-flow-row">*/}	
					<ul className="grid grid-cols-6 grid-rows-4 gap-4 grid-flow-col-dense">				
						<li className=" rounded-lg shadow-xl  flex items-center justify-center bg-teal-500 ">
						  <div className="animate-bounce">
						    <div className="w-3 h-3 bg-white rounded-sm shadow-sm"></div>
						 
						</div></li>
						{/*<li className="col-start-1 col-span-2 row-start-1 row-span-2 bg-teal-300 rounded-lg shadow-xl"><div className="h-24">2</div></li>*/}
						<li className="row-span-4 bg-white rounded-lg shadow-xl flex items-center justify-center"><div className="text-center">2</div></li>
						<li className=" rounded-lg flex items-center justify-center bg-blue-500">						
						  <div className="md:animate-spin lg:animate-none">
						   <div className="w-5 h-5 bg-white rounded-full bg-opacity-50 flex items-center justify-center">
						     <span className="text-sm">🌐</span>
						   </div>
						  
						</div></li>
						<li className="bg-indigo-900 rounded-lg shadow-xl flex items-center justify-center h-24">
						<div className="relative">
						  <div className="w-10 h-10 bg-white rounded-md shadow-md"></div>
						  <div className="absolute top-0 right-0 -mr-1 -mt-1 w-2 h-2 rounded-full bg-green-300 animate-ping animation-duration-100"></div>
						</div></li>
						<li className=" bg-indigo-500 rounded-lg shadow-xl flex  items-center group">
						<div className="px-1 box-content border-1-8 border-indigo-400 border-opacity-50 space-y-1 group-hover:opacity-100">
						  <div className="h-3 w-3 bg-white opacity-25 rounded-sm shadow-sm transform group-hover:opacity-100 group-hover:translate-x-20 transition duration-200"></div>
						  <div className="h-3 w-3 bg-white opacity-25 rounded-sm shadow-sm transform group-hover:opacity-100 group-hover:translate-x-20 transition duration-300"></div>
						  <div className="h-3 w-3 bg-white opacity-25 rounded-sm shadow-sm transform group-hover:opacity-100 group-hover:translate-x-20 transition duration-500"></div>
						  <div className="h-3 w-3 bg-white opacity-25 rounded-sm shadow-sm transform group-hover:opacity-100 group-hover:translate-x-20 transition duration-1000"></div>
						</div></li>
						<li className="row-span-2  flex bg-white rounded-lg shadow-xl">
						<div className="mt-1 flex space-x-1 flex-col">
						  <div className="flex-1 space-y-1 inline-block  ">
						    <h2 className="m-auto font-mono font-thin test-white text-xs px-2">opacity</h2>
						    <div className="m-auto h-5 w-5 bg-orange-600 opacity-25 rounded-sm shadow-sm hover:opacity-100 transition-opacity duration-500"></div>
						  </div> 
						  <div className="flex-1 space-y-1 inline-block ">
						    <h2 className="m-auto font-mono font-thin test-white text-xs px-2">colors</h2>
						    <div className="m-auto h-5 w-5 bg-blue-500 rounded-sm shadow-sm  transform hover:bg-teal-500  transition-colors duration-500 ease-in-out"></div>
						  </div> 
						  <div className="flex-1 space-y-1 inline-block ">
						    <h2 className="m-auto font-mono font-thin test-white text-xs px-2">transform</h2>
						    <div className="m-auto h-5 w-5 bg-teal-600 rounded-sm shadow-sm  transform hover:-translate-y-2   transition-transform duration-500 ease-in-out"></div>
						  </div>
						  <div className="flex-1 space-y-1 inline-block ">
						    <h2 className="m-auto font-mono font-thin test-white text-xs px-2">default</h2>
						    <div className="m-auto h-5 w-5 bg-black  opacity-25 rounded-sm shadow-sm  transform hover:opacity-100 hover:bg-teal-500 hover:-translate-y-2   transition-transform duration-500 ease-in-out"></div>
						  </div>  
						<div></div>
						</div></li>
						<li className=" bg-black rounded-lg shadow-xl  ">
						<div className="mt-1 flex flex-row">
						  <div className="flex-1 group">
						    <div  className="font-mono font-thin test-black text-xs">lin</div>
						    <div className="h-5 w-5 bg-white   rounded-sm shadow-sm  transform group-hover:translate-y-10 transition-transform duration-500 ease-linear"></div>
						  </div>
						  <div className="flex-1 group">
						    <div  className="opacity-100 font-mono font-thin test-black text-xs">in</div>
						    <div className="h-5 w-5 bg-white   rounded-sm shadow-sm  transform group-hover:translate-y-10 transition-transform duration-500 ease-in"></div>
						  </div>
						  <div className="flex-1 group">
						    <div  className="opacity-100 font-mono font-thin test-black text-xs">out</div>
						    <div className="h-5 w-5 bg-white   rounded-sm shadow-sm  transform group-hover:translate-y-10 transition-transform duration-500 ease-out"></div>
						  </div>
						  <div className="flex-1 group">
						    <div  className="opacity-100 font-mono font-thin test-black text-xs">ino</div>
						    <div className="h-5 w-5 bg-white   rounded-sm shadow-sm  transform group-hover:translate-y-10 transition-transform duration-500 ease-in-out"></div>
						  </div>						  
						</div></li>
						<li className="bg-pink-500 rounded-lg shadow-xl flex items-center justify-center ">
						<div className="h-14 w-14 relative">
						  <div className="absolute inset-0 bg-white opacity-25 rounded-lg shadow-2xl"></div>
						  <div className="transform hover:scale-75  transition duration-300">
						    <div className="h-14 w-14  bg-white rounded-lg shadow-2xl flex items-center justify-center text-center">1</div>
						  </div>
						</div></li>						
						<li className="bg-pink-500 rounded-lg shadow-xl flex items-center justify-center ">
						<div className="h-14 w-14 relative">
						  <div className="absolute inset-0 bg-white opacity-25 rounded-lg shadow-2xl"></div>
						  <div className="transform hover:scale-x-50 hover:scale-y-150  transition duration-300 ">
						    <div className="h-14 w-14 bg-white rounded-lg shadow-2xl flex items-center justify-center text-center">2</div>
						  </div>
						</div></li>
						<li className="bg-pink-500 rounded-lg shadow-xl flex items-center justify-center ">
						<div className="h-14 w-14 relative">
						  <div className="absolute inset-0 bg-white opacity-25 rounded-lg shadow-2xl"></div>
						  <div className="transform origin origin-center hover:-rotate-45  transition duration-300 ">
						    <div className="h-14 w-14 bg-white rounded-lg shadow-2xl flex items-center justify-center text-center">3</div>
						  </div>
						</div></li>
						<li className="bg-pink-500 rounded-lg shadow-xl flex items-center justify-center ">
						<div className="h-14 w-14 relative">
						  <div className="absolute inset-0 bg-white opacity-25 rounded-lg shadow-2xl"></div>
						  <div className="transform origin-bottom-left hover:-rotate-45  transition duration-300 ">
						    <div className="h-14 w-14 bg-white rounded-lg shadow-2xl flex items-center justify-center text-center">4</div>
						  </div>
						</div></li>
						<li className="bg-pink-500 rounded-lg shadow-xl flex items-center justify-center ">
						<div className="h-14 w-14 relative">
						  <div className="absolute inset-0 bg-white opacity-25 rounded-lg shadow-2xl"></div>
						  <div className="transform  hover:rotate-90  hover:translate-x-full hover:scale-125 transition duration-300 ">
						    <div className="h-14 w-14 bg-white rounded-lg shadow-2xl flex items-center justify-center text-center">5</div>
						  </div>
						</div></li>		
					</ul>
				</div>
			</div>
        </div>
      )
    }
}

export default connect(null,null)(Flextest);
