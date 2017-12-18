import stylish from '@adrianhelvik/stylish'
import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

const Container = stylish('div', {
  textAlign: 'center',
})

const Header = stylish('header', {
  backgroundColor: '#222',
  height: '150px',
  padding: '20px',
  color: 'white',
})

class App extends Component {
  render() {
    return (
      <Container>
        <Header>
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </Header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </Container>
    )
  }
}

export default App
