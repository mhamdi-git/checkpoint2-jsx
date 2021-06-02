import './App.css';
import react1 from './react1.jpg'
import react2 from './react2.jpg'
function App() {
  return (
    <div>
      <div className="awesome" style={{ border: '1px solid black'}}>
          <h1 className="title red">Your name here</h1>
        <br />
        <img src={react1} classeName="react-1" alt="react1" />
        <br />
      <img src={react2} classeName="react-2" alt="react2" />
      </div>
     <div>
      <video width="320" height="240" controls src="myVideo.mp4" type="video/mp4" />
      </div> 
        <p>Enter your HTML here</p>
      </div>
  );
}

export default App;
