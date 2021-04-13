import HiFaceImage from './hi-face.png';
import './App.css';

function App() {
  return (
    <div>
      <div className='container' >
      <img src={HiFaceImage} className="img-fluid" alt="..."></img>
    </div>
    <div className='container-fluid name-container' >
    <p className='text-sm-left name' >my_name = 'Afraz Khan'</p>
    </div>
    </div>
  );
}

export default App;
