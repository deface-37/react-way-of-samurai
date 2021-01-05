import React from 'react'
import styles from './users.module.css';
import defaultUserPhoto from '../../assets/images/user.png';
import { NavLink } from 'react-router-dom';
import { followAPI } from '../../api/api';

const User = (props) => {
  const user = props.user

  return <div key={user.id}>
    <span>
      <div>
        <NavLink to={'/profile/' + user.id}>
          <img src={user.photos.small != null ? user.photos.small : defaultUserPhoto} className={styles.userPhoto} />
        </NavLink>
      </div>
      <div>
        {user.followed
          ? <button disabled={props.isFollowing} onClick={() => {
            props.toggleIsFollowing(true, user.id)
            followAPI.unfollowUser(user.id)
              .then(data => {
                if (data.resultCode === 0) {
                  props.unfollow(user.id)
                }
                props.toggleIsFollowing(false, user.id)
              })
          }}>Unfollow</button>
          : <button disabled={props.isFollowing} onClick={() => {
            props.toggleIsFollowing(true, user.id)
            followAPI.followUser(user.id)
              .then(data => {
                if (data.resultCode === 0) {
                  props.follow(user.id)
                }
                props.toggleIsFollowing(false, user.id)
              })
          }}>Follow</button>}

      </div>
    </span>
    <span>
      <span>
        <div>{user.name}</div>
        <div>{user.status}</div>
      </span>
      <span>
        <div>{"u.location.country"}</div>
        <div>{"u.location.city"}</div>
      </span>
    </span>
  </div>


}

export default User