import {connect} from 'react-redux';
import action from '../actions/action';
import Main from '../components/Main';

    const mapStateToProps = () => {
        return {
          user: "whatever"
        }
      }

      const mapDispatchToProps = (dispatch) => {
        return {
          onLoginClick: user => {
            dispatch(action(user))
          }
        }
      }
      
    const containerdeux = connect(
        mapStateToProps,
        mapDispatchToProps)(Main)

export default containerdeux