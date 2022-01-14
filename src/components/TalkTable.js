import { Table } from "react-bootstrap";
function TalkTable({ list, setTalkId, setShow }) {
  return (
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
               
                <td>{talk.topic}</td>
                <td>{talk.duration}</td>
              </tr>
            ))}
          </tbody>
        </>
      }
    </Table>
  );
}

export default TalkTable;
