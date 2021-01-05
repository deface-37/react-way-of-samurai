import React, { Component } from 'react'
import Profile from './Profile'
import { connect } from 'react-redux';
import { setProfile } from './../../redux/profile-reducer';
import { withRouter } from 'react-router-dom';
import { profileAPI } from '../../api/api';


export class ProfileContainer extends Component {
  componentDidMount() {
    // this.props.setIsLoading(true)
    const defaultUserId = 2
    const profileId = this.props.match.params.userId || defaultUserId

    profileAPI.getProfile(profileId)
      .then(data => {
        this.props.setProfile(data)
        // this.props.setIsLoading(false)
      });
  }
  
  render() {
    return (
      <Profile profile = {this.props.profile} />
    )
  }
}

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile
})

const mapDispatchToProps = {
  setProfile
}

const ProfileContainerWithRouter = withRouter(ProfileContainer)

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainerWithRouter)
