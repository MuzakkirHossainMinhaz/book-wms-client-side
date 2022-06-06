import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import ItemDetails from './components/Home/Items/ItemDetails/ItemDetails';
import Signin from './components/Authenticate/Signin/Signin';
import Signup from './components/Authenticate/Signup/Signup';
import RequireAuth from './components/Authenticate/RequireAuth/RequireAuth';
import Inventories from './components/Inventories/Inventories';
import AddBook from './components/AddBook/AddBook';
import MyItems from './components/MyItems/MyItems';
import Blogs from './components/Blogs/Blogs';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/inventories' element={<Inventories></Inventories>}></Route>
        <Route path='/inventory/:_id' element={
          <RequireAuth>
            <ItemDetails></ItemDetails>
          </RequireAuth>
        }></Route>
        <Route path='/add-book' element={<AddBook></AddBook>}></Route>
        <Route path='/my-items' element={<MyItems></MyItems>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/signin' element={<Signin></Signin>}></Route>
        <Route path='/register' element={<Signup></Signup>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
