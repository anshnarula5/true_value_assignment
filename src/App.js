import {useEffect, useState} from "react";
import {Container} from "react-bootstrap";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import UserInfo from "./components/UserInfo";
import UserTable from "./components/UserTable";

function App() {
  const [data, setData] = useState([])
  useEffect(() => {
    fetch("https://datapeace-storage.s3-us-west-2.amazonaws.com/dummy_data/users.json")
    .then(res => res.json())
    .then(d => setData(d))
  }, [])
  return (
    <Container className="container py-3">
      <BrowserRouter>
        <Routes>
          <Route path = "/" element={<UserTable users={data} />} />
          <Route path = "/:id" element={<UserInfo users={data} />} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App;
