import React, { useState } from 'react'

const Button = (props) => (
  <button onClick={props.action}>
    {props.description}
  </button>
)

const StatisticLine = (props) => (
    <th>{props.type}: {props.value}</th>
)

const AmountOfFeedback = (props) => {
  return props.g + props.n + props.b
}

const All = (props) => (
  <th>
    All: {<AmountOfFeedback g={props.good} n={props.neutral} b={props.bad} />}
  </th>
)

const PrintAverage = (props) => {
  const avg = (props.good + (-1) * props.bad) / (props.good + props.neutral + props.bad)
  return (
    <th>
      Average: {avg}
    </th>
  )
}

const Positive = (props) => {
  const positive = props.good / (props.good + props.neutral + props.bad) * 100
  return (
    <th>
      Positive: {positive} %
    </th>
  )
}

const Statistics = (props) => {
  if (props.good > 0 || props.neutral > 0 || props.bad > 0){
    return (
      <div>
        <h1>Statistics:</h1>
        <table>
          <tbody>
              <tr><StatisticLine type="Good" value={props.good} /></tr>
              <tr><StatisticLine type="Neutral" value={props.neutral} /></tr>
              <tr><StatisticLine type="Bad" value={props.bad} /></tr>
              <tr><All good={props.good} neutral={props.neutral} bad={props.bad} /></tr>
              <tr><PrintAverage good={props.good} neutral={props.neutral} bad={props.bad} /></tr>
              <tr><Positive good={props.good} neutral={props.neutral} bad={props.bad} /></tr>
          </tbody>
        </table>
      </div>
    )
  } else {
    return (
      <div>
        <h1>Statistics:</h1>

        <p>No feedback given</p>
      </div>
    )
  }
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const addGood = () => {
    setGood(good+1)
  }

  const addNeutral = () => {
    setNeutral(neutral+1)
  }

  const addBad = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <h1>Unicafe feedback</h1>
      <p>
      <Button action={addGood} description="Good" />
      <Button action={addNeutral} description="Neutral" />
      <Button action={addBad} description="Bad" />
      </p>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    
    </div>
  )
}

export default App