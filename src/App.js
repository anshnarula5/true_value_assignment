import {useEffect, useState} from "react";
import {Button, Container, Row} from "react-bootstrap";

function App() {
  const [data, setData] = useState([])
  useEffect(() => {
    fetch("https://datapeace-storage.s3-us-west-2.amazonaws.com/dummy_data/users.json")
    .then(res => res.json())
    .then(d => setData(d))
  }, [])
  return (
    <Container className="container">
      HI
      <Button className="btn btn-primary">HI</Button>
    </Container>
  );
}

export default App;
