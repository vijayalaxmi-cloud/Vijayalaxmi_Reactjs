import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../UI/Button';

const HomePage = () => {

  return (
    <div className="container">
    <div className="row">
    <div className="col-xs-4 form-group text-center">
      <Link to={'/AddUser'}>
      <Button>
          AddUser
      </Button>
      </Link>
      <Link to={'/RemoveUser/:id'}>
      <Button>
          RemoveUser
      </Button>
      </Link>
    </div>

    <div className="col-md-6 mx-auto">
     <table className="table table-hover">
         <thead className="text-white bg-dark text-center">
             <tr>
                 <th scope="col">ID</th>
                 <th scope="col">Name</th>
                 <th scope="col">Email</th>
                 <th scope="col">Address</th>
                 <th scope="col">joiningdate</th>
             </tr>
         </thead>
        
     </table>
    </div>
    </div>
    </div>
  );
};

export default HomePage;
