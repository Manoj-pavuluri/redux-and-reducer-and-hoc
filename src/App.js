import logo from './logo.svg';
import './App.css';
import {Increment,Decrement} from './features/couter/counterSlice'
import {useDispatch , useSelector} from 'react-redux'

function App() {
  const count =  useSelector((state1)=>state1.counter1.count)
  const dispath = useDispatch()

  const IncrementButton = () =>{
    dispath(Increment(3))
  }
  const DecrementButton = ()=>{
    dispath(Decrement(2))
  }

  return (
    <div className="App">  
        <p>
          {count}
        </p>
        <button onClick={()=>IncrementButton()}>+</button>
        <button onClick={()=>DecrementButton()}>-</button>
      
    </div>
  );
}

export default App;
