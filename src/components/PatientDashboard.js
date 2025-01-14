import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Sidebar from "./Sidebar";
import DiagnosticList from "./DiagnosticList";
import PatientDetails from "./PatientDetails";
import DiagnosisHistory from "./Digonisishostory";

const PatientDashboard = () => {
  return (
    <Container fluid className="p-4">
      <Row>
        <Col xs={3}>
          <Sidebar />
        </Col>
        <Col xs={6}>
          <DiagnosisHistory name={PerformanceTiming.name} />
          <DiagnosticList />
        </Col>
        <Col xs={3}>
          <PatientDetails />
        </Col>
      </Row>
    </Container>
  );
};

export default PatientDashboard;
