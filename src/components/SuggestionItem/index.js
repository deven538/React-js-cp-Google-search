// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {suggestionDetails, updateSearchInput} = props
  const {suggestion} = suggestionDetails

  const onClickArrow = () => {
    updateSearchInput(suggestion)
  }

  return (
    <li className="item">
      <h1 className="suggestion-heading">{suggestion}</h1>
      <button type="button" className="button" onClick={onClickArrow}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          className="arrow-logo"
          alt="arrow"
        />
      </button>
    </li>
  )
}

export default SuggestionItem
