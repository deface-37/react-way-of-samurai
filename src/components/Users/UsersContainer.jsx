import React from 'react'
import Users from "./Users";
import { connect } from "react-redux";
import { follow, setUsers, unfollow, setTotalCount, setCurrentPage, setIsLoading, toggleIsFollowing } from "../../redux/users-reducer";
import Pages from './Pages';
import Preloader from '../common/Preloader';
import { usersAPI } from './../../api/api';

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.setIsLoading(true)

    usersAPI.getUsers(this.props.pagesInfo.currentPage, this.props.parameters.usersPerPage)
      .then(data => {
        this.props.setUsers(data.items);
        this.props.setTotalCount(data.totalCount)
        this.props.setIsLoading(false)
      });
  }

  render() {
    return <>
    {this.props.isLoading ? <Preloader/> : <></>}
    <Pages pagesInfo = {this.props.pagesInfo}
      parameters = {this.props.parameters}
      setCurrentPage = {this.props.setCurrentPage}
      reloadUsers = {this.componentDidMount.bind(this)}
    />
    <Users users={this.props.users}
      isFollowing={this.props.isFollowing}
      unfollow={this.props.unfollow}
      follow={this.props.follow}
      toggleIsFollowing={this.props.toggleIsFollowing}
    />
    </>
  }

}

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pagesInfo: state.usersPage.pagesInfo,
    parameters: state.usersPage.parameters,
    isLoading: state.usersPage.isLoading,
    isFollowing: state.usersPage.isFollowing
  }
}

const mapDispatchToProps = {
  follow, unfollow, setUsers, setTotalCount, setCurrentPage, setIsLoading, toggleIsFollowing
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);