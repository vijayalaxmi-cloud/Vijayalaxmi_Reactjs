import React ,{ useState }from 'react';
import classes from './AddUser.module.css';
import { Button, Modal, ModalBody } from 'reactstrap';



const AddUser = (props) => {
    
    const[name, setenteredname] = useState('');
    const[email, setenteredemail] = useState('');
    const[address, setenteredaddress] = useState('');
    const[joiningdate, setenteredjoiningdate] = useState('');
    const [modal, setModal]= useState(false);

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
    const addUserHandler = (event) =>{
        event.preventDefault();
        const val = {
            name,
            email,
            address,
            joiningdate
          };
           console.log(val);      
          props.func(val);
          clearState();
        };
        const clearState = () => {
            setenteredname('');
            setenteredemail('');
            setenteredaddress('');
            setenteredjoiningdate('');
          };

    function toggle() {
        setModal(!modal)
      }
return (
    <div className={classes.input}>
      <Button color="danger" onClick={toggle} type="submit">Add User</Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalBody>
        <label htmlFor="name">Name</label>
        <input id="name" 
        type="text"
        value={name} 
        onChange={nameChangeHandler}          
        /><br></br>
        <label htmlFor="email">Email</label>
        <input id="email" 
          type="email" 
          value={email} 
          onChange={emailChangeHandler}            
          /><br></br>
        <label htmlFor="address">Address</label>
        <input id="address" type="text" 
          value={address} 
          onChange={addressChangeHandler}
          /><br></br>
        <label htmlFor="joiningdate">Joining Date</label>
        <input id="joiningdate" type="date" 
          value={joiningdate}
          onChange={joiningdateChangeHandler}
          /><br></br>
          <div className="col-md-4 form-group text-center">
        <Button onClick={addUserHandler}>Click Me</Button></div>
        </ModalBody>
      </Modal>
   
    </div>
   
)

}

export default AddUser;

