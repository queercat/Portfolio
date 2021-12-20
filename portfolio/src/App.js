import './index.css'

import {Profile} from './components/profile/Profile';
import {About} from './components/about/About';

function App() {
  return (
    <div className='app'>
      <Profile/>
      <About/>
    </div>
  );
}

export default App;
