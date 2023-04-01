import './App.css';
import View from './Components/View';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Add from './Components/Add';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <Routes>
      <Route path='/' element={<View/>}/>
      <Route path='/Add' element={
      <Add data={{id:'',name:'',brand:'',quantity:'',price:''}} method="post"/>}/>

    </Routes>

    </div>
  );
}

export default App;