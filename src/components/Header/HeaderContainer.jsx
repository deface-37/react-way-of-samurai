import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setUserData } from '../../redux/auth-reducer'
import Header from './Header'
import { authAPI, profileAPI } from './../../api/api';

export class HeaderContainer extends Component {
  componentDidMount() {
    authAPI.authMe()
      .then(data => {
        if (data.resultCode === 0) {
          const {id, email, login} = data.data
          this.props.setUserData(login, email, id)
          return id
        }
      })
      .then(id => {
        return profileAPI.getProfile(id)
      })
  }
  
  render() {
    return (
      <Header isAuth={this.props.isUserAuth} login={this.props.login} />
    )
  }
}

const mapDispatchToProps = (state) => ({
  isUserAuth: state.auth.isAuth,
  login: state.auth.login
})

export default connect(mapDispatchToProps, {setUserData})(HeaderContainer)