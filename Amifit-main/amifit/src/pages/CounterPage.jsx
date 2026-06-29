import React from 'react'
import Exercisecountercards from "../components/Exercisecountercards/Exercisecountercards"
import AppBanner from "../components/AppBanner/AppBanner"
import Counterhero from "../components/Counterhero/Counterhero"
const CounterPage = () => {
  return (
    <div>
      <Counterhero />
      <Exercisecountercards />
      <AppBanner />
    </div>
  )
}

export default CounterPage
