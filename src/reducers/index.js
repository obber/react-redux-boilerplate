import { some, actions } from 'some_action_file'

const initialState = {
  // initial redux state is defined here
  loggedIn: false,
  username: null
}

const My_Reducer = (state = initialState, action) => {
  let toChange = {}

  switch (action.type) {
    case SOMETHING:
      // do something
      return

    case SOMETHING_ELSE:
      // do something else
      return

    case ANOTHER_THING:
      // do another thing
      return

    default:
      // return the initial state if action.type is not correctly specified
      return state
  }
}      

export default My_Reducer
