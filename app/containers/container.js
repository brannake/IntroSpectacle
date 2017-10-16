import {connect} from 'react-redux';
import {addUser} from '../actions/action';
import {authenticateUser} from '../actions/action';
import MainLogin from '../components/MainLogin';

    const mapStateToProps = (state) => {
        console.log(state);
        return {
          user: state.user
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
      
    const container = connect(
        mapStateToProps,
        mapDispatchToProps)(MainLogin)

export default container