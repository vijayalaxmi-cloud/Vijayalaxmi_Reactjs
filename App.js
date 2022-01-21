import React from 'react';
import HomePage from './components/Users/HomePage';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import AddUser from './components/Users/AddUser';
import RemoveUser from './components/Users/RemoveUser';
//import UserList from './components/Users/UserList';
import { Route, Routes} from 'react-router-dom';


function App() {
//const [userList, setUserList]=useState([]);

//const addUserHandler = (uName, uEmail, uAddress, uJoiningdate) => {
//setUserList((prevUserList) => {
// return [...prevUserList,{name: uName, emaill: uEmail, address: uAddress, joiningdate: uJoiningdate}];
  //});
//};
  return (
    <div>
    <Routes>
        <Route path='/' element={<HomePage />} /> 
        <Route path='/HomePage' element={<HomePage />} />
        <Route path='/AddUser' element={<AddUser />}/>
        <Route path='/RemoveUser/:id' element={<RemoveUser />} />
    </Routes> 
    </div>    

    );
  }
  
  export default App;
