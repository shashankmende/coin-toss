// Write your code here
import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {isZero: true, tailsCount: 0, headsCount: 0}

  onClickBtn = () => {
    const tossResult = Math.floor(Math.random() * 2)
    console.log(tossResult)
    if (tossResult === 0) {
      this.setState(prevState => ({
        isZero: true,
        headsCount: prevState.headsCount + 1,
      }))
    } else {
      this.setState(prevState => ({
        isZero: false,
        tailsCount: prevState.tailsCount + 1,
      }))
    }
  }

  render() {
    const {isZero, headsCount, tailsCount} = this.state
    const total = headsCount + tailsCount
    return (
      <div className="bg_container">
        <div className="toss-container">
          <h1>Coin Toss Game</h1>
          <p>Heads (or) Tails</p>
          {!isZero && (
            <img
              src="https://assets.ccbp.in/frontend/react-js/tails-img.png"
              className="image"
              alt="toss result"
            />
          )}
          {isZero && (
            <img
              src="https://assets.ccbp.in/frontend/react-js/heads-img.png"
              className="image"
              alt="toss result"
            />
          )}
          <button type="button" className="button" onClick={this.onClickBtn}>
            Toss Coin
          </button>
          <div className="output-container">
            <p>Total: {total}</p>
            <p>Heads: {headsCount}</p>
            <p>Tails: {tailsCount}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default CoinToss
