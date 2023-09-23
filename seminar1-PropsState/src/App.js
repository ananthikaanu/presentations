 
import './App.css';
// import  './components/Greeting';
// import './components/Greeting_class'
// import Greeting_class from './components/Greeting_class';
import "./components/Counter"
import Counter from './components/Counter';

function App() {
  return (
    // <div className="App">
    //  <h1>haii ananthika</h1>
    //  <Greeting_class name='anu' age='24'/>
    //  <Greeting_class name='edstem' age='22'/>
    //  <Greeting_class/>
    // </div>
    <div>
        <Counter/> 
        <Counter/> 
        <Counter/> 
    </div>
  );
}

export default App;

//(so the best part is if we are changing any value in any button if will not affect other component we are handling it inside only that component)