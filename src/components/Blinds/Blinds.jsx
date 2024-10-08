import { useState } from "react"
import './blinds.css'

export const Blinds = ({state}) => {
  const [zaluzie, setZaluzie] = useState(state)
  const handleToggleBlinds = () => {
    setZaluzie(!zaluzie)
  }

  return (
    <div className="blinds">
				<div className="blinds__icon">
					<img src={zaluzie ? "./images/blinds-open.svg":"./images/blinds-closed.svg"} />
				</div>
				<div className="blinds__name">
					Žaluzie
				</div>
				<div className="blinds__controls">
					<button className={`button ${zaluzie ? "button--active" : ""}`} onClick={handleToggleBlinds}>Otevřeno</button>
					<button className={`button ${!zaluzie ? "button--active" : ""}`} onClick={handleToggleBlinds}>Zavřeno</button>
				</div>
			</div>
  )
}