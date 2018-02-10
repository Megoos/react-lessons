import { showRequest, showSuccess, showFailure } from '../actions/shows'
import { show } from '../api'

export default (store) => next => action => {
  if (action.type === showRequest.toString()) {
    show(action.payload)
      .then(films => { store.dispatch(showSuccess(films)) })
      .catch(error => { store.dispatch(showFailure(error)) })
  }
  return next(action)
}