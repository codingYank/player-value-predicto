import React, { useState, useEffect } from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
} from "react-router-dom"
import Prediction from "./Prediction"
import Home from "./Home"
import "./App.css"

const App = () => {
  const [value, setValue] = useState()
  const [data, setData] = useState()
  return (
    <div className="app">
      <Routes>
        <Route
          path="/"
          element={<Home setValue={setValue} setData={setData} />}
        />
        <Route
          path="/predict"
          element={<Prediction value={value} data={data} />}
        />
      </Routes>
    </div>
  )
}

export default App
