import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {storeSelectedMonth} from '../actions/action';
import About from '../components/About';

    const mapStateToProps = (state) => {
        console.log(state);
        return {
            user: state.user,
            authenticated: state.authenticated,
            currentDate: state.currentDate,
            currentMonth: state.currentMonth,
            selectedDate: state.selectedDate,
            selectedMonth: state.selectedMonth
        }
    }

      const mapDispatchToProps = (dispatch) => {
        return {
            storeSelectedMonth: month => {
                dispatch(storeSelectedMonth(month))
              }
            }
      }

    const containerAbout = connect(
        mapStateToProps,
        mapDispatchToProps)(About)

export default withRouter(containerAbout);