import { Component } from 'react';

import MyTable from '../../UI/Table';
import MyProgress from '../../UI/Progress';
import axios from '../../axios';

// Redux
import { connect } from 'react-redux';
import { updateUsersAction, updateErrorAction} from '../../redux/actions/users';

interface IUserProps {
  loading: boolean;
  users: any;
  error: any;
  updateUsersAction: any;
  updateErrorAction: any;
}

class Users extends Component<IUserProps> {

    state = {loading: true, data: null, error: null};

    searchKeyPressHandler = ( event: any ) => {
      if (event.key === `Enter`){
        // console.log( `data: `, event.target.value);
        const getOption = event.target.value;
        this.fetchUsers(`/api/users?name=${getOption}`);
      }
    }

    fetchUsers = (route: string) => {
      axios.get(route)
        .then(response => {
          const users: any[] = response.data;
          const modUsers = users.map((user: any) => {
            return { User: user.name, Email: user.email, City: user.address.city, Phone: user.phone, Company: user.company.name };
          });
          // this.setState({ loading: false, data: modUsers, error: null }); 
          this.props.updateUsersAction(modUsers);
        })
        // .catch(error => this.setState({ loading: false, data: null, error: error })); 
        .catch(error => this.props.updateErrorAction(error));
    }
  
  
    componentDidMount() {
      this.fetchUsers(`/api/users`);
    }

    render( ) { return <UsersView {...this.props} searchHandler={this.searchKeyPressHandler} /> }
}

interface IProps {
  loading: boolean;
  users: any;
  error: any;
  searchHandler: any;
}

class UsersView extends Component<IProps> {

  renderLoading( ) {
    const dataJSX = <MyProgress />;
    return dataJSX;
  }

  renderError( ) {
    const dataJSX = <h3>Sorry! An error ocurred!</h3>;
    return dataJSX;
  }

  renderSuccess( ) {
    const dataJSX = <MyTable rows={this.props.users} searchHandler={this.props.searchHandler} />
    return dataJSX;
  }

  render( ) {
    if ( this.props.loading ) {
      return this.renderLoading( );
    } else if ( this.props.users ) {
      return this.renderSuccess( );
    } else {
      return this.renderError( );

    }
  }
}

// Connect to Redux
const mapStateToProps = (store: any) => ({
  loading: store.users.loading,
  users: store.users.data,
  error: store.users.error
});

export default connect(mapStateToProps, {updateUsersAction, updateErrorAction}) (Users);