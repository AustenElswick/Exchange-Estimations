import React, { Component } from 'react'
import './App.css'
import Header from './header/header'
import Brochure from './brochure/brochure'
import Data from './data/data'
import Codes from './codes/codes'


class App extends Component {

  constructor() {
    super()
    this.state = {
      brochureShowing: true,
      dataShowing: false,
      exchangeRates: [],
      estimatedRates: [],
      currencyCodes: [],
      rates: null,
      checkboxActive: false

    }
    this.switchPages = this.switchPages.bind(this)
    this.checkboxActivate = this.checkboxActivate.bind(this)
  }

  componentDidMount() {
    this.apiFetch()
    this.jsonFetch()
    this.apiFetchEndPoint2()
  }

  apiFetch() {
    const apiurl = 'http://data.fixer.io/api/latest?access_key=8b24adff58351d2237657161d5283a1f'
    return fetch(apiurl + '&symbols=USD,AUD,GBP&format=1&base=EUR')
    .then(response => response.json())
    .then(data => {
      this.setState({exchangeRates: data})
      this.setState({rates: [data.rates]})
    })
  }

  jsonFetch() {
    return fetch('./estimates.json')
    .then(response => response.json())
    .then(data => {
      this.setState({estimatedRates: data})
    })
  }

  apiFetchEndPoint2() {
    const apiUrl = 'http://data.fixer.io/api/symbols?access_key=8b24adff58351d2237657161d5283a1f'
    return fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      this.setState({currencyCodes: data.symbols})
    })
  }

  switchPages() {
    const brochure = this.state.brochureShowing
    const data = this.state.dataShowing
    this.setState({
      brochureShowing: !brochure,
      dataShowing: !data
    })
  }

  checkboxActivate(){
    const active = this.state.checkboxActive
    this.setState({checkboxActive: !active})
  }



  render() {
    return (
      <div className="App">
        <Header />
        <Brochure />
        {this.state.rates ? <Data
         current={this.state.rates}
         estimates={this.state.estimatedRates}
         /> : null}
         {this.state.currencyCodes ? <Codes
          currencyCodes={this.state.currencyCodes}
          change={this.checkboxActivate}
          activate={this.state.checkboxActive} /> : null }
      </div>
    )
  }
}

export default App;
