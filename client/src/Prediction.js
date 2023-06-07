import React from "react"
import ageValuePlot from "./assets/age-value-plot.png"
import gamesGoalsPlot from "./assets/games-goals-plot.png"
import ppgValuePlot from "./assets/ppg-value-plot.png"
import ageMaxValueBar from "./assets/age-max-value-bar.png"

const Prediction = ({ value, data }) => {
  console.log(value)
  console.log(data)
  return (
    <div className="prediction">
      <div className="prediction-header">
        <h1>The value of the player is:</h1>
        <h1> ${value}</h1>
      </div>
      <div className="data-header">
        <h2>About the data</h2>
      </div>
      <div className="data-visual-item-container">
        <div className="data-visual-item">
          <p>
            This scatter plot shows the correlation between the age of a player
            and their value.
          </p>
          <img src={ageValuePlot} alt="Age and value plot"></img>
        </div>
        <div className="data-visual-item">
          <p>This bar graph shows the most valuable player at each age.</p>
          <img src={ageMaxValueBar} alt="Max value at each age bar graph"></img>
        </div>
        <div className="data-visual-item">
          <p>
            This scatter plot show the correlation between the number of games a
            player plays in and the number of goals they score.
          </p>
          <img src={gamesGoalsPlot} alt="Games and goals plot"></img>
        </div>
        <div className="data-visual-item">
          <p>
            This plot show how the quality of the team a play plays for
            influences their value.
          </p>
          <img src={ppgValuePlot} alt="Points per game and value plot"></img>
        </div>
      </div>
    </div>
  )
}

export default Prediction
