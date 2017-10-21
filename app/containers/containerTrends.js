import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom'
import {storeImageData, storeCurrentMonth, storeSelectedMonth, storeCurrentDate, storeSelectedDate, storeSelectedView} from '../actions/action';
import Trends from '../components/Trends';

    const mapStateToProps = (state) => {
      return {
        currentDate: state.currentDate,
        currentMonth: state.currentMonth,
        selectedDate: state.selectedDate,
        selectedMonth: state.selectedMonth,
        selectedView: state.selectedView,
        monthlyMoodLogs: state.monthlyMoodLogs,
        dailyMoodScores: state.dailyMoodScores
      }
    }

      const mapDispatchToProps = (dispatch) => {
        return {
          storeImageData: data => {
            dispatch(storeImageData(data))
          },
          storeSelectedMonth: month => {
            dispatch(storeSelectedMonth(month))
          },
          storeSelectedView: view => {
            dispatch(storeSelectedView(view))
          }
        }
      }

    const containerTrends = connect(
        mapStateToProps,
        mapDispatchToProps)(Trends)

export default withRouter(containerTrends);