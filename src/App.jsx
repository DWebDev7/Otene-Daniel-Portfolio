import './App.css'
import './fonts.css'
import Page from './Page'
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