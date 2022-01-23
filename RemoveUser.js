import React ,{ useState }from 'react';
import { Button, Modal, ModalBody } from 'reactstrap';


const RemoveUser = () => {

    const[enteredid, setenteredid] = useState('');
    const [modal, setModal]= useState(false);

    const idChangeHandler = (event) => {
        setenteredid(event.target.value);

    };

    const addUserHandler = (event) =>{
        event.preventDefault();
       
        };
        
        
    function toggle() {
        setModal(!modal)
      }
return (
   
    <div className="col-sm-4">
     <Button color="danger" onClick={toggle}>RemoveUser</Button>
     <Modal isOpen={modal} toggle={toggle}>
     <ModalBody>
        <label htmlFor="UserID">User ID</label>
            <input type="text" value={enteredid}  onChange={idChangeHandler}  />           
            <button onClick={addUserHandler}> Click Me</button>
    </ModalBody>
    </Modal>
    </div>
);
}

export default RemoveUser;