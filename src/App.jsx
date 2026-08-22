import { useState } from 'react';
import Loader from './Components/Loader';
import Home from './Components/Home';

import './App.css';
function App() {

  const [Loading, setLoading] = useState(true)
  return (

    <div>
        {Loading ?
    <Loader setLoading={setLoading}/>:<Home/> 
  }

    </div>

  )
}

export default App
