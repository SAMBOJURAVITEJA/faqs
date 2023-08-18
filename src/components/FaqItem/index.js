import {Component} from 'react'

import './index.css'

class FaqItem extends Component {
  state = {Loading: false}

  toggle = () => {
    this.setState(prevState => ({Loading: !prevState.Loading}))
  }

  getAnswer = text => {
    const {Loading} = this.state
    const result = Loading ? (
      <div className="answer-container">
        <hr className="horizontal-line" />
        <p className="heading">{text}</p>
      </div>
    ) : null

    console.log(result)
    return result
  }

  render() {
    const {each} = this.props
    const {Loading} = this.state
    const {questionText, answerText} = each
    const url = Loading
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
    const alt = Loading ? 'minus' : 'plus'

    return (
      <li className="list-item">
        <div className="question-container">
          <h1 className="heading horse">{questionText}</h1>
          <button type="button" onClick={this.toggle}>
            <img src={url} alt={alt} />
          </button>
        </div>
        {this.getAnswer(answerText)}
      </li>
    )
  }
}
export default FaqItem
