import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Home from './pages/Home/Home';
import Add from './pages/Add/Add';
import Login from './pages/Login/Login';
import SinglePage from './pages/SinglePage/SinglePage';
import SinglePageEdit from './pages/SinglePageEdit/SinglePageEdit';
function App() {
  return (
    <div className="App">
     <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route path='/' element={<Home/>} />
      <Route path='/add' element={<Add/>}/>
      <Route path='/singlePage/:id' element={<SinglePage/>}/>
      <Route path='/singlePageEdit/:id' element={<SinglePageEdit/>}/>
     </Routes>
    </div>
  );
}

export default App;
