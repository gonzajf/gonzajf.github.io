import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar'

function App() {
  return (
    <div id="colorlib-page">
        <div id="container-wrap">
         	<Sidebar></Sidebar>
				<div id="colorlib-main">
				{/* 	<Introduction></Introduction>
					<About></About>
					<Timeline></Timeline> */}
          	</div>
      	</div>
    </div>
  );
}

export default App;
