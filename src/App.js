import logo from './logo.svg';
import './App.css';
import Landing from './components/Landing/Landing';
import React,{ useState } from 'react';
import Desktop from './components/Desktop/Desktop';


function App() {
  
  const [homepage, sethomepage] = useState(false)
  return (
    <div className="App">

      {
        homepage?
        <Desktop/>:<Landing sethomepage={sethomepage}  />
      }
    </div>
  );
}

export default App;
