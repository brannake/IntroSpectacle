import {connect} from 'react-redux';
import action from '../actions/action';
import MainLogin from '../components/MainLogin';

    const mapStateToProps = () => {
        return {
          user: "whatever"
        }
      }

      const mapDispatchToProps = (dispatch) => {
        return {
          onTodoClick: id => {
            dispatch(action(id))
          }
        }
      }
      
    const container = connect(
        mapStateToProps,
        mapDispatchToProps)(MainLogin)

export default container