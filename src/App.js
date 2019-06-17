import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar'
import Experience from './components/Experience'

function App() {
  return (
    <div id="colorlib-page">
        <div id="container-wrap">
         	<Sidebar />
				<div id="colorlib-main">
					<Experience />
				{/* 	<Introduction></Introduction>
					*/}
          	</div>
      	</div>
    </div>
  );
}

export default App;
