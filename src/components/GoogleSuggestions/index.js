// Write your code here
import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'
import './index.css'

class GoogleSuggestions extends Component {
  state = {
    search: '',
  }

  onChangeSearchInput = event => {
    this.setState({search: event.target.value})
  }

  updateSearchInput = value => {
    this.setState({
      search: value,
    })
  }

  render() {
    const {suggestionsList} = this.props
    const {search} = this.state
    const searchResults = suggestionsList.filter(each =>
      each.suggestion.toLowerCase().includes(search.toLowerCase()),
    )
    return (
      <div className="main-container">
        <div className="inner-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png "
            alt="google logo"
            className="google-logo"
          />
          <div className="input-logo-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search icon"
              className="search-logo"
            />
            <input
              type="search"
              placeholder="Search Google"
              className="input-area"
              onChange={this.onChangeSearchInput}
              value={search}
            />
          </div>
          <ul className="list-search-items">
            {searchResults.map(each => (
              <SuggestionItem
                key={each.id}
                suggestionDetails={each}
                updateSearchInput={this.updateSearchInput}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
