import React, { useState } from "react"
import { Card, Form, Button, Segment, Dropdown } from "semantic-ui-react"
import "semantic-ui-css/semantic.min.css"
import "../../App.css"

function InsuranceForm({ data, fetchData }) {
  const [sections, setSections] = useState([{ name: "", age: "" }])
  const [coverage, setCoverage] = useState("500000")
  const [tenure, setTenure] = useState(1)
  const handleAddSection = () => {
    setSections([...sections, { name: "", age: "" }])
  }

  const coverOptions = [
    { key: "500000", value: "500000", text: "500,000" },
    { key: "700000", value: "700000", text: "700,000" },
    { key: "1000000", value: "1000000", text: "1,000,000" },
    { key: "1500000", value: "1500000", text: "1,500,000" },
    { key: "2000000", value: "2000000", text: "2,000,000" },
    { key: "2500000", value: "2500000", text: "2,500,000" },
    { key: "3000000", value: "3000000", text: "3,000,000" },
    { key: "4000000", value: "4000000", text: "4,000,000" },
    { key: "5000000", value: "5000000", text: "5,000,000" },
    { key: "7500000", value: "7500000", text: "7,500,000" },
  ]

  const handleInputChange = (index, field, value) => {
    const updatedSections = [...sections]
    updatedSections[index][field] = value
    setSections(updatedSections)
  }

  const handleSubmit = () => {
    let setPremium = true
    const sortedSections = [...sections].sort((a, b) => b.age - a.age)
    const agesArray = sortedSections.map((section) => parseInt(section.age, 10))
    const nameArray = sortedSections.map((section) => section.name)
    for (let i = 0; i < agesArray.length; i++) {
      if (!agesArray[i] || agesArray[i] < 1 || agesArray[i] > 99) {
        setPremium = false
        break
      }
    }
    if (setPremium) {
      fetchData(agesArray, coverage, nameArray)
    } else {
      alert("please selct a age between 1-99")
    }
  }

  return (
    <div className="insurance-form-container">
      <Segment.Group>
        <div className="selection-container">
          <div className="selection">
            <label>Coverage</label>
            <Dropdown
              placeholder="Select Cover"
              fluid
              selection
              options={coverOptions}
              value={coverage}
              onChange={(e, { value }) => setCoverage(value)}
            />
          </div>
          <div className="selection">
            <label>Tenure</label>
            <input
              type="number"
              placeholder="Tenure(1-10) yrs"
              min="1"
              max="10"
              value={tenure}
              onChange={(e) => setTenure(e.target.value)}
            />
          </div>
        </div>
        <div className="section-cards">
          {sections.map((section, index) => (
            <Card
              key={index}
              className="section-card"
              style={{ margin: "10px" }}
            >
              <Card.Content>
                <Form>
                  <Form.Field>
                    <label>Name</label>
                    <input
                      placeholder="Name"
                      value={section.name}
                      onChange={(e) =>
                        handleInputChange(index, "name", e.target.value)
                      }
                    />
                  </Form.Field>
                  <Form.Field>
                    <label>Age</label>
                    <input
                      type="number"
                      placeholder="Age(1-99) yrs"
                      min="1"
                      max="99"
                      value={section.age}
                      onChange={(e) =>
                        handleInputChange(index, "age", e.target.value)
                      }
                    />
                  </Form.Field>
                </Form>
              </Card.Content>
            </Card>
          ))}
        </div>
      </Segment.Group>
      <div style={{display:"flex",justifyContent:"center"}}>
      <div className="add-button">
        <Button onClick={handleAddSection} className="blue">
          Add Person
        </Button>
      </div>
      <div className="submit-button">
        <Button onClick={handleSubmit} className="green">
          Submit
        </Button>
      </div>
      <div className="submit-button">
        <Button onClick={()=>setSections([{ name: "", age: "" }])} className="red">
          Reset
        </Button>
      </div>
      </div>
    </div>
  )
}

export default InsuranceForm
