import React ,{ useState }from 'react';
import classes from './AddUser.module.css';
import Button from '../UI/Button';


const AddUser = props => {
    

    const[enteredname, setenteredname] = useState('');
    const[enteredemail, setenteredemail] = useState('');
    const[enteredaddress, setenteredaddress] = useState('');
    const[enteredjoiningdate, setenteredjoiningdate] = useState('');

    const addUserHandler = (event) =>{
        event.preventDefault();
        //props.onAddUser(enteredname,enteredemail,enteredaddress,enteredjoiningdate);
        console.log(enteredname,enteredemail,enteredaddress,enteredjoiningdate);
        console.log('You clicked submit.');
        setenteredname('');
        setenteredemail('');
        setenteredaddress('');
        setenteredjoiningdate('');
    };

    const nameChangeHandler = (event) => {
        setenteredname(event.target.value);

    };
    const emailChangeHandler = (event) => {
        setenteredemail(event.target.value);

    };
    const addressChangeHandler = (event) => {
        setenteredaddress(event.target.value);

    };
    const joiningdateChangeHandler = (event) => {
        setenteredjoiningdate(event.target.value);

    };
return (
    <div className={classes.input}>
    <form onSubmit={addUserHandler}>
        <label htmlFor="name">Name</label>
        <input id="name" 
        type="text"
        value={enteredname} 
        onChange={nameChangeHandler}          
        /><br></br>
        <label htmlFor="email">Email</label>
        <input id="email" 
          type="email" 
          value={enteredemail} 
          onChange={emailChangeHandler}            
          /><br></br>
        <label htmlFor="address">Address</label>
        <input id="address" type="text" 
          value={enteredaddress} 
          onChange={addressChangeHandler}
          /><br></br>
        <label htmlFor="joiningdate">Joining Date</label>
        <input id="joiningdate" type="date" 
          value={enteredjoiningdate}
          onChange={joiningdateChangeHandler}
          /><br></br>
          <div className="col-md-4 form-group text-center">
        <Button type="submit">Add User</Button></div>
    </form>
    </div>
   
)

}

export default AddUser;

