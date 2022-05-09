import React, { Component } from 'react';
import { connect } from 'react-redux';
import {fetch_users } from '../actions/actions';
import {store} from '../client'

class UsersList extends Component {
  componentDidMount() {
    fetch_users();
  }

  renderUsers() {
    return this.props.users.map(user => {
      return <li key={user.name}>{user.name}</li>;
    });
  }

  render() {
    return (
      <div>
        Here's a big list of users:
        <ul>{this.renderUsers()}</ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { users: state.users };
}


function loadData(store) {
    console.log('loading data from server')
}

export { loadData };
export default connect(mapStateToProps, fetch_users )(UsersList);