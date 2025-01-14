import React, { useEffect, useState } from "react";
import { ListGroup } from "react-bootstrap";
import axios from "axios";

const Sidebar = () => {
  const [patients, setPatients] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const response = await axios.get(
          "https://fedskillstest.coalitiontechnologies.workers.dev",
          {
            headers: {
              Authorization: `Basic Y29hbGl0aW9uOnNraWxscy10ZXN0`
, // Replace with the actual token
            },
          }
        );
        // console.log(response.data)
        setPatients(response.data);
      } catch (err) {
        console.error("Error fetching patients:", err);
        setError("Failed to load patient data. Please try again later.");
      }
    };

    fetchPatients();
  }, [])
;    console.log(patients,"<========")


  return (
    <div className="bg-light p-3">
      <h5>Patients</h5>
      {error ? (
        <p className="text-danger">{error}</p>
      ) : (
        <ListGroup>
          {patients.length > 0 ? (
            patients.map((patient, index) => (
              <ListGroup.Item key={index}>
                {patient.name} ({patient.gender}, {patient.age})
              </ListGroup.Item>
            ))
          ) : (
            <p>Loading patients...</p>
          )}
        </ListGroup>
      )}
    </div>
  );
};

export default Sidebar;
