import React from "react";
import { Card, Table } from "react-bootstrap";

const DiagnosticList = () => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>Diagnostic List</Card.Title>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Problem/Diagnosis</th>
              <th>Description</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Hypertension</td>
              <td>Chronic high blood pressure</td>
              <td>Under Observation</td>
            </tr>
            <tr>
              <td>Type 2 Diabetes</td>
              <td>Insulin resistance</td>
              <td>Cured</td>
            </tr>
            <tr>
              <td>Asthma</td>
              <td>Recurrent bronchial constriction</td>
              <td>Inactive</td>
            </tr>
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
};

export default DiagnosticList;
