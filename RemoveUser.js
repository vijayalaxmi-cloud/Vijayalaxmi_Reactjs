import React ,{ useState }from 'react';
import Button from '../UI/Button';
const RemoveUser = () => {

    const[enteredid, setenteredid] = useState('');

    const removeuserhandler = (event) =>{
        event.preventDefault();     
        setenteredid('');
    };
    const idChangeHandler = (event) => {
        setenteredid(event.target.value);

    };
return (
   
    <div className="col-sm-4">
        <form onSubmit={removeuserhandler}className="form-horizontal">
        <div className="form-group">
        <label htmlFor="UserID">User ID</label>
            <input type="text" value={enteredid}  onChange={idChangeHandler}  />
            <Button type="submit" className="col-xs-12 col-sm-6 col-md-8">RemoveUser</Button>
            </div>
        </form>
        </div>
    
        

);
}

export default RemoveUser;