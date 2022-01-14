import React, { useState, useEffect } from "react";
import facade from "../apiFacade";
import { Modal } from "react-bootstrap";
import { Table } from "react-bootstrap";
function OverviewModal({ list, setShow, show, conferenceId, changeSubmit }) {
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Talk information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h3>Talk Info</h3>
          
            <>
              <Table striped bordered hover>
      {
        <>
          <thead>
            <tr>
              <th>Topic</th>
              <th>Duration</th>
            </tr>
          </thead>
          <tbody>
            {list.map((talk, index) => (
              <tr key={index}>
                 <td>
                    {talk.id}
                </td>
                <td>{talk.topic}</td>
                <td>{talk.duration}</td>
              </tr>
            ))}
          </tbody>
        </>
      }
    </Table>
            </>
          ) : (
            
        </Modal.Body>
        <Modal.Footer>
          <button className="btn btn-grey" onClick={handleClose}>
            Close
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default OverviewModal;