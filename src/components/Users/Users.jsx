import React from 'react';
import User from './User';

const Users = (props) => {
  return <div>
    {
      props.users.map(user => (
        <User {...props} user={user} isFollowing = {props.isFollowing.find(id => id === user.id)}
      />))
    }
  </div>
}




export default Users;