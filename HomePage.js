import React, { useState } from 'react'
import AddUser from './AddUser';
import RemoveUser from './RemoveUser';
import axios from 'axios';
const HomePage = () => {
  const jsonData=[]
  const [UserData, setUserData] = useState(jsonData);

  const tableRows = UserData.map((info) => {
    return (
      <tr>
        <td>{info.userId}</td>
        <td>{info.name}</td>
        <td>{info.email}</td>
        <td>{info.Address}</td>
        <td>{info.joiningdate}</td>
      </tr>
    );
  });

  const addRows = (data) => {
    const totalusers = UserData.length;
    data.userId = totalusers + 1;
    const updateduserData = [...UserData];
    updateduserData.push(data);
    setUserData(updateduserData);
  };

  const deleteHandler = id => async () => {
      try {
         await axios.deleteValues(id); // no error, assume success
        setUserData(data => data.filter((item) => item.id !== id));
      } catch(err) {
        // whatever you want to do with error
       }
     };
console.log(addRows);
  return (
    <div className="col-md-6 mx-auto">
     <table className="table table-stripped">
         <thead className="text-white bg-dark text-center">
             <tr>
                 <th scope="col">User ID</th>
                 <th scope="col">Name</th>
                 <th scope="col">Email</th>
                 <th scope="col">Address</th>
                 <th scope="col">joiningdate</th>
             </tr>
         </thead>
        <tbody>{tableRows}</tbody>
     </table>
     <AddUser func={addRows}/>
     <RemoveUser func={deleteHandler(UserData.userId)} />
    </div>
    
  );
};

export default HomePage;
