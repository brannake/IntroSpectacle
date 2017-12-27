import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom'
import {storeSelectedMonth, storeSelectedView, storeSelectedEmotion, displayGraph} from '../actions/action';
import Trends from '../components/Trends';

    const mapStateToProps = (state) => {
      return {
        currentDate: state.currentDate,
        currentMonth: state.currentMonth,
        selectedDate: state.selectedDate,
        selectedMonth: state.selectedMonth,
        selectedView: state.selectedView,
        selectedEmotion: state.selectedEmotion,
        monthlyViewDataJoy: state.monthlyViewDataJoy,
        monthlyViewDataFear: state.monthlyViewDataFear,
        monthlyViewDataAnger: state.monthlyViewDataAnger,
        monthlyViewDataDisgust: state.monthlyViewDataDisgust,
        yearlyViewDataJoy: state.yearlyViewDataJoy,
        yearlyViewDataFear: state.yearlyViewDataFear,
        yearlyViewDataAnger: state.yearlyViewDataAnger,
        yearlyViewDataDisgust: state.yearlyViewDataDisgust,
        graphData: state.graphData,
        selectedMonthKey: state.selectedMonthKey
      }
    }

      const mapDispatchToProps = (dispatch) => {
        return {
          storeSelectedMonth: month => {
            dispatch(storeSelectedMonth(month))
          },
          storeSelectedView: view => {
            dispatch(storeSelectedView(view))
          },
          storeSelectedEmotion: emotion => {
            dispatch(storeSelectedEmotion(emotion))
          },
          displayGraph: arg => {
            dispatch(displayGraph(arg))
          }
        }
      }

    const containerTrends = connect(
        mapStateToProps,
        mapDispatchToProps)(Trends)

export default withRouter(containerTrends);