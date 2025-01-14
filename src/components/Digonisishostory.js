import React, { useEffect, useState } from "react";
import { Card, Row, Col } from "react-bootstrap";
import axios from "axios";
import { Line } from "react-chartjs-2";

const DiagnosisHistory = (name) => {
  const [patients, setPatients] = useState([]);
  const [,setError] = useState("");

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const response = await axios.get("https://fedskillstest.coalitiontechnologies.workers.dev", {
          headers: {
            Authorization: `Basic Y29hbGl0aW9uOnNraWxscy10ZXN0`
          },
        });
        setPatients(response.data);
      } catch (err) {
        console.error("Error fetching patients data:", err);
        setError("Failed to load patient data. Please try again later.");
      }
    };
    fetchPatients();
  }, []);
  console.log(patients,"<===============")
  const data = {
    labels: patients.map(patient => patient.date), // Assuming each patient object has a 'date' field
    datasets: [
      {
        label: 'Patient Data',
        data: patients.map(patient => patient.value), // Assuming each patient object has a 'value' field
        fill: false,
        backgroundColor: 'rgb(75, 192, 192)',
        borderColor: 'rgba(75, 192, 192, 0.2)',
      },
    ],
  };
  return (
    <Card className="mb-3">
      <Card.Body>
        <Card.Title>Diagnosis History</Card.Title>
        {/* Replace this section with a chart library */}
        <div className="mb-4">
          <p>Blood Pressure Trends (Chart Placeholder)</p>
        </div>
        <Row>
          <Col>
            <Card>
              <Card.Body>
                <h6>Respiratory Rate</h6>
                <p>20 bpm</p>
                <small>Normal</small>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Body>
                <h6>Temperature</h6>
                <p>98.6°F</p>
                <small>Normal</small>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Body>
                <h6>Heart Rate</h6>
                <p>78 bpm</p>
                <small>Lower than Average</small>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default DiagnosisHistory;
