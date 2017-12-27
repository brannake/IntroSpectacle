import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom'
import {storeImageData, storeMonthlyViewDataJoy, storeMonthlyViewDataFear, storeMonthlyViewDataAnger, storeMonthlyViewDataDisgust, storeCurrentMonth, storeSelectedMonth, storeCurrentDate, storeSelectedDate, storeSelectedView, storeYearlyViewDataJoy, storeYearlyViewDataFear, storeYearlyViewDataAnger, storeYearlyViewDataDisgust} from '../actions/action';
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
        monthlyViewData: state.monthlyViewData,
        dates: state.dates
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
          storeYearlyViewDataJoy: data => {
            dispatch(storeYearlyViewDataJoy(data))
          },
          storeYearlyViewDataFear: data => {
            dispatch(storeYearlyViewDataFear(data))
          },
          storeYearlyViewDataAnger: data => {
            dispatch(storeYearlyViewDataAnger(data))
          },
          storeYearlyViewDataDisgust: data => {
            dispatch(storeYearlyViewDataDisgust(data))
          },
          storeMonthlyViewDataJoy: data => {
            dispatch(storeMonthlyViewDataJoy(data))
          },
          storeMonthlyViewDataFear: data => {
            dispatch(storeMonthlyViewDataFear(data))
          },
          storeMonthlyViewDataAnger: data => {
            dispatch(storeMonthlyViewDataAnger(data))
          },
          storeMonthlyViewDataDisgust: data => {
            dispatch(storeMonthlyViewDataDisgust(data))
          },
        }
      }

    const containerMain = connect(
        mapStateToProps,
        mapDispatchToProps)(Main)

export default withRouter(containerMain);