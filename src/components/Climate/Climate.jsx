import './climate.css'
import { useState } from 'react';

export const Climate = ({temperature, humidity}) => {
  const [temp, setTemperature] = useState(temperature)

  const handleIncreaseTemp = () => {
    setTemperature(temp + 1)
  }

  const handleDecreaseTemp = () => {
    setTemperature(temp - 1)
  }

  return (
			<div className="climate">
      <div className="climate__icon">
        <img src="./images/temp.svg"/>
      </div>
      <div className="climate__content">
        <div className="climate__temperature">{temp}&deg;C</div>
        <div className="climate__humidity">Vlhost vzduchu {humidity}&nbsp;%</div>
      </div>
      <div className="climate__controls">
        <button className="button" onClick={handleIncreaseTemp}>+</button>
        <button className="button" onClick={handleDecreaseTemp}>-</button>
      </div>
    </div>
  )
}