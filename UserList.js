import React from 'react';

const UserList = (props) => {
    return <ul>
        {props.users.map(user => <li>{user.name} {user.email} {user.address} {user.joiningdate}</li>)}
    </ul>
};

export default UserList;