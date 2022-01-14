import { Table } from "react-bootstrap";
function ConferenceTable({ list, setConferenceId, setShow }) {
  return (
    <Table striped bordered hover>
      {
        <>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Location</th>
              <th>Capacity</th>
            </tr>
          </thead>
          <tbody>
            {list.map((conference, index) => (
              <tr key={index}>
                 <td>
                  <button className="btn btn-dark" onClick={() => {
                      setConferenceId(conference.id)
                      setShow(true)
                  }}>
                    {conference.id}
                  </button>
                </td>
                <td>{conference.name}</td>
                <td>{conference.location}</td>
                <td>{conference.capacity}</td>
              </tr>
            ))}
          </tbody>
        </>
      }
    </Table>
  );
}

export default ConferenceTable;
