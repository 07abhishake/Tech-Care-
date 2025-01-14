import React from "react";
import { Card, Button } from "react-bootstrap";

const PatientDetails = () => {
  return (
    <div>
      <Card>
        <Card.Img
          variant="top"
          src="https://via.placeholder.com/150"
          alt="Patient"
        />
        <Card.Body>
          <Card.Title>Jessica Taylor</Card.Title>
          <p>
            <strong>DOB:</strong> August 23, 1996
          </p>
          <p>
            <strong>Gender:</strong> Female
          </p>
          <p>
            <strong>Contact:</strong> (415) 555-1234
          </p>
          <p>
            <strong>Insurance:</strong> Sunrise Health Assurance
          </p>
          <Button variant="primary">Show All Information</Button>
        </Card.Body>
      </Card>

      <Card className="mt-3">
        <Card.Body>
          <Card.Title>Lab Results</Card.Title>
          <ul className="list-unstyled">
            <li>
              <Button variant="link">Blood Tests</Button>
            </li>
            <li>
              <Button variant="link">CT Scans</Button>
            </li>
            <li>
              <Button variant="link">Radiology Reports</Button>
            </li>
            <li>
              <Button variant="link">X-Rays</Button>
            </li>
            <li>
              <Button variant="link">Urine Test</Button>
            </li>
          </ul>
        </Card.Body>
      </Card>
    </div>
  );
};

export default PatientDetails;
