import React, {Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addCount } from '../redux/countReducer'

class AddCount extends Component {
  add = () => {
    this.props.addCount()
  }

  render () {
    const { count } = this.props;
    return (
      <div>
        <h1>AddCount: <span>{count}</span></h1>
        <button onClick={this.add}>Add To Count</button>
      </div>
    )
  }
}

// const mapStateToProps = ({ count }) => ({ count })
const mapStateToProps = ({count}) => ({count});

const mapDispatchToProps = (dispatch) => {
  return {
    addCount: bindActionCreators(addCount, dispatch)
  }
}

export default connect(
  state => ({
    count: state.count.count
  })
  , mapDispatchToProps)(AddCount)