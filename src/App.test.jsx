import { render, screen } from '@testing-library/react'
import App from './App'

describe('App', () => {
  it('renders the App component', () => {
    render(<App />)
    
    screen.debug(); // prints out the jsx in the App component unto the command line
  })

  // Render the app, type in a word, then look for result.
  // Test for empty string
  // Test for a word that does not exist
})