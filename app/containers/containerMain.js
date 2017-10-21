import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom'
import {storeImageData, storeYearlyViewData, storeMonthlyViewData, storeCurrentMonth, storeSelectedMonth, storeCurrentDate, storeSelectedDate, storeSelectedView} from '../actions/action';
import Main from '../components/Main';

    const mapStateToProps = (state) => {
      return {
        user: state.user,
        authenticated: state.authenticated,
        imageData: state.imageData,
        currentDate: state.currentDate,
        currentMonth: state.currentMonth,
        selectedDate: state.selectedDate,
        selectedMonth: state.selectedMonth,
        selectedView: state.selectedView,
        yearlyViewData: state.yearlyViewData,
        monthlyViewData: state.monthlyViewData
      }
    }

      const mapDispatchToProps = (dispatch) => {
        return {
          storeImageData: data => {
            dispatch(storeImageData(data))
          },
          storeCurrentMonth: month => {
            dispatch(storeCurrentMonth(month))
          },
          storeSelectedMonth: month => {
            dispatch(storeSelectedMonth(month))
          },
          storeCurrentDate: date => {
            dispatch(storeCurrentDate(date))
          },
          storeSelectedDate: date => {
            dispatch(storeSelectedDate(date))
          },
          storeSelectedView: view => {
            dispatch(storeSelectedView(view))
          },
          storeYearlyViewData: data => {
            dispatch(storeYearlyViewData(data))
          },
          storeMonthlyViewData: data => {
            dispatch(storeMonthlyViewData(data))
          },
        }
      }

    const containerMain = connect(
        mapStateToProps,
        mapDispatchToProps)(Main)

export default withRouter(containerMain);