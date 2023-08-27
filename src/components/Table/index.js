import React from "react"
import { Table, Button } from "semantic-ui-react"
import "semantic-ui-css/semantic.min.css"

function DataDisplay({ data, reset, completePayment }) {
  const { name, age, price, discount, total_premium } = data
  return (
    <div className="data-display-container">
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Age</Table.HeaderCell>
            <Table.HeaderCell>Discount</Table.HeaderCell>
            <Table.HeaderCell>Price</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {name.map((n, index) => (
            <Table.Row key={index}>
              <Table.Cell>{n}</Table.Cell>
              <Table.Cell>{age[index]}</Table.Cell>
              <Table.Cell>{discount[index]?`${discount[index]} (50%)` :discount[index]}</Table.Cell>
              <Table.Cell>{price[index]}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>

        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell >Total Premium</Table.HeaderCell>
            <Table.HeaderCell colSpan="3" textAlign="center">{total_premium}</Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
      <div className="add-button">
        <Button onClick={completePayment} className="green">
          Complete Payment
        </Button>
        <Button onClick={reset} className="red">
          Back
        </Button>
      </div>
    </div>
  )
}

export default DataDisplay
