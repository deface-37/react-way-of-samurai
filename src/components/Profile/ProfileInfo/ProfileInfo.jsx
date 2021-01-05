import React from 'react';
import Preloader from '../../common/Preloader';
import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
    const profile = props.profile

    if (!profile) {
        return <Preloader/>
    }

    return (
        <div>
            <div>
                <img
                    src='https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350'/>
            </div>
            <div className={s.descriptionBlock}>
                <img src={profile.photos.large} alt="avatar"/>
                <div className= {s.fullName} > {profile.fullName} </div>
                <div>ava + description</div>
            </div>
        </div>
    )
}

export default ProfileInfo;