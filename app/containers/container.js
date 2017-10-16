import {connect} from 'react-redux';
import action from '../actions/action';
import MainLogin from '../components/MainLogin';

    const mapStateToProps = (state) => {
        console.log(state);
        return {
          user: state.user
        }
      }

      const mapDispatchToProps = (dispatch) => {
        return {
          onLoginClick: user => {
            dispatch(action(user))
          }
        }
      }
      
    const container = connect(
        mapStateToProps,
        mapDispatchToProps)(MainLogin)

export default container