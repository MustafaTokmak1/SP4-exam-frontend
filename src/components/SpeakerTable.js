import { Table } from "react-bootstrap";
function SpeakerTable({ list, setSpeakerId, setShow }) {
  return (
    <Table striped bordered hover>
      {
        <>
          <thead>
            <tr>
              <th>Name</th>
              <th>Profession</th>
              <th>Gender</th>
            </tr>
          </thead>
          <tbody>
            {list.map((speaker, index) => (
              <tr key={index}>
               
                <td>{speaker.name}</td>
                <td>{speaker.profession}</td>
                <td>{speaker.gender}</td>
              </tr>
            ))}
          </tbody>
        </>
      }
    </Table>
  );
}

export default SpeakerTable;
