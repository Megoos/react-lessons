import { createActions } from 'redux-actions'

export const {
  searchRequest,
  searchSuccess,
  searchFailure
} = createActions({
  SEARCH_REQUEST: null,
  SEARCH_SUCCESS: null,
  SEARCH_FAILURE: null
})