import React from 'react'
import './data.css'

const Data = ({current, estimates, currencyCodes, checked}) => {
  return(
  <div>
      <h3>Current exchange rates</h3>
      <p>Base currency is the Euro</p>
      <div className='main-box'>
        <div className='country-flex'>
      {Object.keys(current[0]).map((country, index) => {
        return <p key={index}>{country}</p>
      })}
    </div>
    <div className='rates-flex'>
      {Object.values(current[0]).map((currency, index) => {
        return <p key={index}>{currency}</p>
      })}
    </div>
    </div>
    <p>Exchange rates estimates</p>
      <div className='conversion-flex'>
        {estimates.map(objects => {
          return Object.entries(objects).map((object, index) => {
            return(
              <div className='currency-conversion-flex'>
                <p key={index}>{Object.values(object[0])}</p>
                {Object.entries(object[1]).map((rates, index) => {
                  return <p key={index}>{rates}</p>

                })}
              </div>
            )
          })
        })}
      </div>
</div>
    )
}

export default Data
