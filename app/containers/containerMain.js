import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom'
import {storeImageData} from '../actions/action';
import Main from '../components/Main';

    const mapStateToProps = () => {
      return {
        user: state.user,
        authenticated: state.authenticated,
        imageData: state.imageData
      }
    }
      const mapDispatchToProps = (dispatch) => {
        return {
          storeData: data => {
            dispatch(storeImageData(data))
          }
        }
      }

    const containerMain = connect(
        mapStateToProps,
        mapDispatchToProps)(Main)

export default withRouter(containerMain);