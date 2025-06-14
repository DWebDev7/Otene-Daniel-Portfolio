import './App.css'
import Page from './Page'
import HomePage from './HomePage'
import { useEffect } from 'react';
import { initAnimations } from './components/Animations';

function App() {
  useEffect(() => {
    initAnimations();
  }, []);
  return (
    <Page />
  )
}

export default App
