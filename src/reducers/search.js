import { handleActions } from 'redux-actions'
import { searchRequest, searchSuccess, searchFailure } from '../actions/search'

export default handleActions({
    [searchRequest]: (state) => ({
      ...state,
      isFetching: true
    }),
    [searchSuccess]: (state, { payload }) => ({
      ...state,
      isFetching: false,
      results: payload
    }),
    [searchFailure]: (state) => ({
      ...state,
      isFetching: false
    })
  },
  {
    isFetching: false,
    results: []
  }
)