import React, { useState, useEffect } from "react"
import axios from "axios"
import { Formik, Form, Field, ErrorMessage } from "formik"
import { useNavigate } from "react-router-dom"
import { playerData } from "./schema"

const Home = ({ setValue, setData }) => {
  const navigate = useNavigate()

  const onSubmit = async (e) => {
    console.log(e)
    setData(e)
    try {
      const res = await axios.post("http://tylerschmidt.pythonanywhere.com/", e)
      console.log(res)

      if (res.status === 200) {
        let val = res.data.value
        setValue(val.toFixed(2))
        console.log(res.data.value)

        navigate("predict")
      }
    } catch (error) {
      console.log(error)
    }
  }

  const initData = {
    age: "",
    goals: "",
    assists: "",
    league: 1,
    games: "",
    starts: "",
    ppg: "",
  }

  return (
    <div className="home">
      <div className="main-body">
        <div className="header">
          <h1>Player Value Predictor</h1>
          <p>
            Enter in the following stats for the player and their team and find
            out their tranfer value!
          </p>
        </div>
        <Formik
          initialValues={initData}
          onSubmit={onSubmit}
          validationSchema={playerData}
        >
          <Form className="input-form">
            <div className="input-form-item">
              <label htmlFor="age">Age</label>
              <ErrorMessage className="error-msg" component="div" name="age" />
              <Field id="age" name="age" type="number" min="0" />
            </div>
            <div className="input-form-item">
              <label htmlFor="goals">Goals Scored</label>
              <ErrorMessage
                className="error-msg"
                component="div"
                name="goals"
              />
              <Field id="goals" name="goals" type="number" min="0" />
            </div>

            <div className="input-form-item">
              <label htmlFor="assists">Assists Provided</label>
              <ErrorMessage
                className="error-msg"
                component="div"
                name="assists"
              />
              <Field id="assists" name="assists" type="number" min="0" />
            </div>
            <div className="input-form-item">
              <label htmlFor="league">League</label>
              <Field id="league" name="league" as="select">
                <option value={1}>Premier League</option>
                <option value={2}>La Liga</option>
                <option value={3}>Ligue 1</option>
                <option value={4}>Serie A</option>
                <option value={5}>Bundesliga</option>
              </Field>
            </div>
            <div className="input-form-item">
              <label htmlFor="games">Games Played</label>
              <ErrorMessage
                className="error-msg"
                component="div"
                name="games"
              />
              <Field id="games" name="games" type="number" min="0" />
            </div>
            <div className="input-form-item">
              <label htmlFor="starts">Games Started</label>
              <ErrorMessage
                className="error-msg"
                component="div"
                name="starts"
              />
              <Field id="starts" name="starts" type="number" min="0" />
            </div>
            <div className="input-form-item">
              <label htmlFor="ppg">Team Points per Game</label>
              <ErrorMessage className="error-msg" component="div" name="ppg" />
              <Field id="ppg" name="ppg" type="number" />
            </div>
            <button type="submit">Submit</button>
          </Form>
        </Formik>
      </div>
    </div>
  )
}

export default Home
