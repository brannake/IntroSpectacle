import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom'
import {addUser, authenticateUser} from '../actions/action';
import Login from '../components/Login';

    const mapStateToProps = (state) => {
        console.log(state);
        return {
          user: state.user,
          authenticated: state.authenticated
        }
      }

    const mapDispatchToProps = (dispatch) => {
        return {
            onLoginClick: (user) => {
                dispatch(addUser(user))
            },
            confirmAuthentication: () => {
                dispatch(authenticateUser())
            }
        }
    }
      
    const containerLogin = connect(
        mapStateToProps,
        mapDispatchToProps)(Login)

export default withRouter(containerLogin);