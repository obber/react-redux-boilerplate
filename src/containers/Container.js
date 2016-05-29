import { connect } from 'react-redux'

import some_component from 'some_component_file'
import some_action from 'some_action_file'

const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ deposit, some_action }, dispatch);
}

const BalanceContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(some_component)

export default Container
