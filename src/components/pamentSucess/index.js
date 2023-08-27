import React from "react"
import { motion } from "framer-motion"
import { Container } from "semantic-ui-react"
import "semantic-ui-css/semantic.min.css"
import { Button } from "semantic-ui-react"

function PaymentSuccess({ reset }) {
  return (
    <Container className="payment-success-container">
      <motion.svg
        className="checkmark"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 52 52"
      >
        <motion.circle
          className="checkmark__circle"
          cx="26"
          cy="26"
          r="25"
          initial={{ strokeDashoffset: 166 }}
          animate={{ strokeDashoffset: 0 }}
          transition={{ duration: 0.6 }}
        />
        <motion.path
          className="checkmark__check"
          fill="none"
          stroke="#fff"
          strokeWidth="3"
          d="M14 27 22 35 38 17"
          initial={{ opacity: 0, pathLength: 0 }}
          animate={{ opacity: 1, pathLength: 1 }}
          transition={{ duration: 0.3, delay: 0.8 }}
        />
      </motion.svg>
      <h1 className="success-message">Payment Successful!</h1>
      <Button onClick={reset} className="green">
        Go Back
      </Button>
    </Container>
  )
}

export default PaymentSuccess
