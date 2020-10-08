import React from 'react'
import './App.css'
import Characters from './components/Characters'
class App extends React.Component {
  
  state = {
    characters: [],
    alive: [],
    deceased: []
  }

  componentDidMount() {
    fetch('https://breakingbadapi.com/api/characters')
      .then(response => response.json())
      .then(characters => this.setState({ characters }))
  }

  addToAlive = (character) => {
      const updatedCharacters = this.state.characters.filter(charac => charac !== character)
      this.setState({characters: updatedCharacters, alive: [...this.state.alive, character]})
}

  render(){
    return (
      <div className="App">
        <h1>Breaking Bad</h1>
        <main>
          <section className='all-characters'>
            <h2>All Characters</h2>
            <Characters characters={this.state.characters} addToAlive={this.addToAlive}/>
          </section>
          <div className='sorted-characters'>
            <section className='alive'>
              <h2>Alive</h2>
              <Characters characters={this.state.alive}/>
            </section>
            <section className='deceased'>
              <h2>Deceased</h2>
            </section>
        </div>
        </main>
      </div>
    )
  }
}

export default App
