import React from 'react'
import './codes.css'

const Codes = ({currencyCodes, change, activate}) => {

  return (
    <div>
      <label>See which countries have which money codes? </label>
      <input type='checkbox' onChange={() => change()}></input>
      {console.log(currencyCodes)}
      {Object.entries(currencyCodes).map((code, index) => {
        return <p className={activate ? null : 'hidden'  } key={index}>{code}</p>
      })}
    </div>
  )
}

export default Codes
