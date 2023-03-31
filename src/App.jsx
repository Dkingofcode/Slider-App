import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Carousel from './Carousel';
import { shortList } from './data';

function App() {
  //const [slide, setSlide] = useState(shortList)

  return (
    <div className="App">
      <Carousel />
    </div>
  )
}

export default App;
