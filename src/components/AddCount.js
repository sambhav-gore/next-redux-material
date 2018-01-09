import React, {Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addCount } from '../redux/countReducer'
import { toggleDirection, toggleType } from '../redux/themeReducer'

class AddCount extends Component {
  add = () => {
    this.props.addCount()
  }

  changeDirection = () => {
    this.props.changeDirection();
  }

  changePrimary = () => {
    this.props.changePrimary();
  }

  render () {
    const { count } = this.props;
    return (
      <div>
        <h1>AddCount: <span>{count}</span></h1>
        <button onClick={this.add}>Add To Count</button>
        <button onClick={this.changeDirection}>Change Direction</button>
        <button onClick={this.changePrimary}>Change Color</button>
      </div>
    )
  }
}

// const mapStateToProps = ({ count }) => ({ count })
const mapStateToProps = ({count}) => ({count});

const mapDispatchToProps = (dispatch) => {
  return {
    addCount: bindActionCreators(addCount, dispatch),
    changeDirection: bindActionCreators(toggleDirection, dispatch),
    changePrimary: bindActionCreators(toggleType, dispatch)
  }
}

export default connect(
  state => ({
    count: state.count.count
  })
  , mapDispatchToProps)(AddCount)