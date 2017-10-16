import {connect} from 'react-redux';
import action from '../actions/action';
import MainLogin from '../components/MainLogin';

    const mapStateToProps = () => {
        return {
          user: "whatever"
        }
      }
      
    const container = connect(
        mapStateToProps)(MainLogin)

export default container