import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom'
import About from '../components/About';

    const mapStateToProps = (state) => {
        return {
            user: state.user,
            authenticated: state.authenticated
        }
    }

      const mapDispatchToProps = (dispatch) => {
        return {
            confirmAuthentication: () => {
                dispatch(authenticateUser())
            }
        }
      }

    const containerAbout = connect(
        mapStateToProps,
        mapDispatchToProps)(About)

export default withRouter(containerAbout);