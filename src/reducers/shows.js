import { handleActions } from 'redux-actions'
import { showRequest, showSuccess, showFailure } from '../actions/shows'

export default handleActions({
    [showRequest]: (state) => ({
      ...state,
      isFetching: true
    }),
    [showSuccess]: (state, { payload }) => ({
      ...state,
      isFetching: false,
      film: payload
    }),
    [showFailure]: (state) => ({
      ...state,
      isFetching: false
    })
  },
  {
    isFetching: false,
    film: {}
  }
)