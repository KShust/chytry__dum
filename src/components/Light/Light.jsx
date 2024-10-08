import './light.css'
import lightOn from '../../../public/images/light-on.svg'
import lightOff from '../../../public/images/light-off.svg'
import { useState } from 'react'

export const Light = ({name, state}) => {

  const [lightState, setLightState] = useState(state)

  const handleClick = () => {
    setLightState(lightState === 'on' ? 'off' : 'on')
  }

  return (
    <div className="light" onClick={handleClick}>
      <div className="light__icon">
        <img src={lightState === 'on' ? lightOn : lightOff} />
      </div>
      <div className="light__name">{name}</div>
    </div>
  )
}