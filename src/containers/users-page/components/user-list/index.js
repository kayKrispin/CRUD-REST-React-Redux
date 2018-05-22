import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchUsers} from '../../../../actions/users';
import UserItem from '../user-item'

class UserList extends Component {

  componentDidMount(){
    this.props.fetchUsers()
  }

  render() {
    const { error, loading, users } = this.props;
    const ul = {listStyleType:'none',minWidth:'700px',display:'inline-flex',justifyContent:'center',alignItems:'base-line',flexWrap:'wrap'}

      if(error){
      return <div>Error {error.message}</div>
    }
    if(loading){
      return <div>Loading...</div>
    }
    return (
			<div>
				<div className='row'>
        <ul style={ul }>
					{users  ? (
							users.map((user, i) => {
                console.log('user', user);
								return <UserItem key={i} user={user} />;
							})
						) : <h2>Loading...</h2>}
            </ul>
				</div>
			</div>
		);

  }
}


function mapStateToProps(state){
  return{
    users:state.userList.users,
    loading:state.userList.loading,
    error:state.userList.error
  }
}

export default connect(mapStateToProps,{fetchUsers})(UserList)
