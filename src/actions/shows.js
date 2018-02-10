import { createActions } from 'redux-actions'

export const {
  showRequest,
  showSuccess,
  showFailure
} = createActions({
  SHOW_REQUEST: null,
  SHOW_SUCCESS: null,
  SHOW_FAILURE: null
})