import React, { useState, useEffect } from "react"
import InsuranceForm from "./components/InputData"
import DataDisplay from "./components/Table"
import { Segment } from "semantic-ui-react"
import "./App.css"
import Payment from "./components/pamentSucess"
const App = () => {
  const [data, setData] = useState([{}])
  const [premiumReceived, setPremiumReceived] = useState(true)
  const [paymentReceived, setPaymentReceived] = useState(false)

  const fetchData = async (agesArray, coverage, nameArray) => {
    try {
      const response = await fetch("https://flask-oneassure-b286d7b34f92.herokuapp.com/calculate_premium", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Add any other headers you might need
        },
        body: JSON.stringify({
          ages: agesArray,
          cover: coverage,
        }), // Replace with your data
      })
      const jsonData = await response.json()

      setData({ ...jsonData, name: nameArray, age: agesArray })
      setPremiumReceived(false)
    } catch (error) {
      console.error("Error fetching data:", error)
    }
  }

  const completePayment = () => {
    setPaymentReceived(true)
  }

  const reset = () => {
    setData([{}])
    setPaymentReceived(false)
    setPremiumReceived(true)
  }

  return (
    <div className="insurance-form-container">
      <Segment>
        <h1>Premium Health Insurance Plan</h1>
      </Segment>
      {!paymentReceived ? (
        premiumReceived ? (
          <InsuranceForm data={data} fetchData={fetchData} reset={reset}/>
        ) : (
          <DataDisplay
            data={data}
            reset={reset}
            completePayment={completePayment}
          />
        )
      ) : (
        <Payment reset={reset} />
      )}
    </div>
  )
}

export default App
